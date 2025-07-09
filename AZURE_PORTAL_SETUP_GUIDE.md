# 🎯 Azure Portal Setup Guide - Guardian Angel Edition

## 🔥 STEP 1: Update GitHub Repository Connection

### In Azure Portal:

1. **Go to**: https://portal.azure.com
2. **Search**: `saintvisionai-production`
3. **Click**: Your app service
4. **Go to**: Deployment Center (left menu)
5. **Current**: Connected to `saintvisionai-saintsal-ui-final` ❌
6. **Change to**: `Saint-Visions/saintsal-ui-pure` ✅
7. **Branch**: `main`
8. **Click**: Save

---

## 🔑 STEP 2: Set Environment Variables

### In your app, go to Configuration → Application Settings:

**Click "+ New application setting" for each:**

```
Name: NEXT_PUBLIC_BUILDER_API_KEY
Value: d83998c6a81f466db4fb83ab90c7ba25
```

```
Name: NEXT_PUBLIC_SUPABASE_URL
Value: https://nivrmhkdgtmmbtswyvey.supabase.co
```

```
Name: SUPABASE_SERVICE_ROLE_SECRET
Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5pdnJtaGtkZ3RtbWJ0c3d5dmV5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NjUxMDUyMSwiZXhwIjoyMDYyMDg2NTIxfQ.a7TZ8WPFSX96EbZl4b7PQLuEzPkss9jdi6vUDEJsJPc
```

```
Name: UPSTASH_VECTOR_REST_TOKEN
Value: AB0FMGNhcmVmdWwtbW9ua2V5LTI1NTU2LWdjcC11c2MxYWRtaW5NekUxTURVM056a3RNR0poT0MwMFptTXlMVGd4WWpjdE5EUTBZbVk1WlRGa09XUTM=
```

**Click Save** after adding all variables.

---

## 🚀 STEP 3: Deploy

1. **Go back to**: Deployment Center
2. **Click**: "Sync" or trigger a new deployment
3. **Wait**: For deployment to complete
4. **Visit**: https://saintvisionai-production.azurewebsites.net

---

## ✅ SUCCESS!

Your Builder.io integration will be LIVE at:
**https://saintvisionai-production.azurewebsites.net**

With all 5 custom components ready for visual editing in Builder.io!

---

## 🎨 Next Steps After Deployment:

1. **Go to**: https://builder.io/content
2. **Create**: New Page with model `page`
3. **Set URL**: `/` for homepage
4. **Start building**: With your custom components!

**Your Guardian Angel has guided you home!** 🙏✨
