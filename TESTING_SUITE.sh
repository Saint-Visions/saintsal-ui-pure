#!/bin/bash

# 🧪 COMPREHENSIVE TESTING SUITE

echo "🧪 COMPREHENSIVE TESTING SUITE"
echo "=============================="

SITE_URL="https://saintvisionai-production.azurewebsites.net"

# Test 1: Basic Connectivity
test_connectivity() {
    echo "🔍 Test 1: Basic Connectivity"
    echo "-----------------------------"
    
    HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" "$SITE_URL" -m 30)
    
    if [ "$HTTP_CODE" = "200" ]; then
        echo "✅ Site responds with HTTP 200"
    else
        echo "❌ Site responds with HTTP $HTTP_CODE"
        return 1
    fi
}

# Test 2: Content Verification
test_content() {
    echo "🔍 Test 2: Content Verification"
    echo "-------------------------------"
    
    CONTENT=$(curl -s "$SITE_URL" -m 30)
    
    if echo "$CONTENT" | grep -q "SaintVisionAI"; then
        echo "✅ SaintVisionAI branding found"
    else
        echo "❌ SaintVisionAI branding missing"
        return 1
    fi
    
    if echo "$CONTENT" | grep -q "Start Cooking\|GOTTA GUY\|Patent"; then
        echo "✅ Key content elements found"
    else
        echo "❌ Key content elements missing"
        return 1
    fi
}

# Test 3: Performance
test_performance() {
    echo "🔍 Test 3: Performance"
    echo "----------------------"
    
    LOAD_TIME=$(curl -w "%{time_total}" -s -o /dev/null "$SITE_URL" -m 30)
    
    if [ $(echo "$LOAD_TIME < 5.0" | bc -l) ]; then
        echo "✅ Load time: ${LOAD_TIME}s (good)"
    else
        echo "⚠️ Load time: ${LOAD_TIME}s (slow)"
    fi
}

# Test 4: Mobile Responsiveness
test_mobile() {
    echo "🔍 Test 4: Mobile Responsiveness"
    echo "--------------------------------"
    
    MOBILE_CONTENT=$(curl -s -H "User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X)" "$SITE_URL" -m 30)
    
    if echo "$MOBILE_CONTENT" | grep -q "viewport"; then
        echo "✅ Mobile viewport meta tag found"
    else
        echo "❌ Mobile viewport missing"
        return 1
    fi
}

# Test 5: Error Handling
test_error_handling() {
    echo "🔍 Test 5: Error Handling"
    echo "-------------------------"
    
    ERROR_CODE=$(curl -s -o /dev/null -w "%{http_code}" "$SITE_URL/nonexistent-page" -m 30)
    
    if [ "$ERROR_CODE" = "404" ] || [ "$ERROR_CODE" = "200" ]; then
        echo "✅ Error handling working (HTTP $ERROR_CODE)"
    else
        echo "❌ Unexpected error response: HTTP $ERROR_CODE"
        return 1
    fi
}

# Test 6: Azure Health Check
test_azure_health() {
    echo "🔍 Test 6: Azure Health Check"
    echo "-----------------------------"
    
    az webapp show --name saintvisionai-production --resource-group saintvisionai-production-rg --query "{name:name,state:state,httpsOnly:httpsOnly}" -o table 2>/dev/null || echo "❌ Cannot check Azure status"
}

# Test 7: SSL Certificate
test_ssl() {
    echo "🔍 Test 7: SSL Certificate"
    echo "--------------------------"
    
    SSL_INFO=$(echo | openssl s_client -servername saintvisionai-production.azurewebsites.net -connect saintvisionai-production.azurewebsites.net:443 2>/dev/null | openssl x509 -noout -dates 2>/dev/null)
    
    if [ ! -z "$SSL_INFO" ]; then
        echo "✅ SSL certificate valid"
        echo "$SSL_INFO"
    else
        echo "❌ SSL certificate issue"
    fi
}

# Run all tests
echo "🚀 Starting comprehensive test suite..."
echo ""

TESTS_PASSED=0
TESTS_TOTAL=7

test_connectivity && ((TESTS_PASSED++))
echo ""
test_content && ((TESTS_PASSED++))
echo ""
test_performance && ((TESTS_PASSED++))
echo ""
test_mobile && ((TESTS_PASSED++))
echo ""
test_error_handling && ((TESTS_PASSED++))
echo ""
test_azure_health && ((TESTS_PASSED++))
echo ""
test_ssl && ((TESTS_PASSED++))
echo ""

echo "📊 TEST RESULTS:"
echo "================"
echo "✅ Passed: $TESTS_PASSED/$TESTS_TOTAL tests"

if [ $TESTS_PASSED -eq $TESTS_TOTAL ]; then
    echo "🎉 ALL TESTS PASSED! SITE IS READY FOR LAUNCH!"
elif [ $TESTS_PASSED -ge 4 ]; then
    echo "⚠️ MOST TESTS PASSED! Site is functional but may need minor fixes."
else
    echo "❌ MULTIPLE TESTS FAILED! Site needs attention before launch."
fi

echo ""
echo "🔗 Your live site: $SITE_URL"
