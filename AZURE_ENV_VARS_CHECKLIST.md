# 🔑 Azure Environment Variables - Complete Checklist

## ✅ ENVIRONMENT VARIABLES TO SET IN AZURE

Copy and paste these into Azure App Service → Configuration → Application Settings:

### 🎨 Builder.io Integration

```
Name: NEXT_PUBLIC_BUILDER_API_KEY
Value: d83998c6a81f466db4fb83ab90c7ba25
```

### 🗄️ Supabase Database

```
Name: NEXT_PUBLIC_SUPABASE_URL
Value: https://nivrmhkdgtmmbtswyvey.supabase.co
```

```
Name: NEXT_PUBLIC_SUPABASE_ANON_KEY
Value: [YOUR SUPABASE ANON KEY - still need this one]
```

```
Name: SUPABASE_SERVICE_ROLE_SECRET
Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5pdnJtaGtkZ3RtbWJ0c3d5dmV5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NjUxMDUyMSwiZXhwIjoyMDYyMDg2NTIxfQ.a7TZ8WPFSX96EbZl4b7PQLuEzPkss9jdi6vUDEJsJPc
```

### 🔍 Upstash Vector Database (AI Search)

```
Name: UPSTASH_VECTOR_REST_TOKEN
Value: AB0FMGNhcmVmdWwtbW9ua2V5LTI1NTU2LWdjcC11c2MxYWRtaW5NekUxTURVM056a3RNR0poT0MwMFptTXlMVGd4WWpjdE5EUTBZbVk1WlRGa09XUTM=
```

---

## 🚀 HOW TO SET THESE IN AZURE

### Method 1: Azure Portal (Visual)

1. Go to https://portal.azure.com
2. Find your App Service
3. Go to **Configuration** → **Application Settings**
4. Click **+ New application setting**
5. Add each variable above
6. Click **Save**
7. **Restart** your app

### Method 2: Azure CLI (Command Line)

```bash
# Set Builder.io API key
az webapp config appsettings set --name your-app-name --resource-group your-rg --settings NEXT_PUBLIC_BUILDER_API_KEY=your-builder-key

# Set Supabase URL
az webapp config appsettings set --name your-app-name --resource-group your-rg --settings NEXT_PUBLIC_SUPABASE_URL=your-supabase-url

# Set Supabase Anon Key
az webapp config appsettings set --name your-app-name --resource-group your-rg --settings NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key

# Set Upstash Vector Token
az webapp config appsettings set --name your-app-name --resource-group your-rg --settings UPSTASH_VECTOR_REST_TOKEN=AB0FMGNhcmVmdWwtbW9ua2V5LTI1NTU2LWdjcC11c2MxYWRtaW5NekUxTURVM056a3RNR0poT0MwMFptTXlMVGd4WWpjdE5EUTBZbVk1WlRGa09XUTM=
```

---

## ⚠️ SECURITY REMINDER

- ✅ **Upstash token**: Already provided ✓
- 🔑 **Builder.io API key**: Get from https://builder.io/account/space
- 🗄️ **Supabase credentials**: From your Supabase dashboard
- 🔒 **Never commit these to git** - always use Azure configuration

---

## ✅ VERIFICATION

After setting all variables, verify in Azure:

1. Go to Configuration → Application Settings
2. Check all 4 variables are there
3. Restart your app
4. Test your site functionality

**You're all set with the environment variables!** 🎯
