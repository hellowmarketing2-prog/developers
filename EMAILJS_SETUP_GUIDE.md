# 📧 EmailJS Setup Guide for Contact Form

## Your Email: uzairalijutt1@gmail.com

Follow these simple steps to activate your contact form backend:

---

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up"** (It's FREE!)
3. Sign up with your email or Google account

---

## Step 2: Add Email Service

1. After login, go to **"Email Services"** in the dashboard
2. Click **"Add New Service"**
3. Choose **"Gmail"** (recommended) or any other email service
4. Click **"Connect Account"**
5. Sign in with your Gmail account: **uzairalijutt1@gmail.com**
6. Copy the **Service ID** (looks like: `service_abc123`)

---

## Step 3: Create Email Template

1. Go to **"Email Templates"** in the dashboard
2. Click **"Create New Template"**
3. Use this template content:

### Template Settings:
- **Template Name**: Contact Form Message

### Email Content:
```
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}
Budget: {{budget}}

Message:
{{message}}

Newsletter Subscription: {{newsletter}}

---
This message was sent from your portfolio contact form.
```

### Template Variables (make sure these match):
- `{{from_name}}`
- `{{from_email}}`
- `{{subject}}`
- `{{budget}}`
- `{{message}}`
- `{{newsletter}}`

4. In **"To Email"** field, enter: **uzairalijutt1@gmail.com**
5. Click **"Save"**
6. Copy the **Template ID** (looks like: `template_xyz789`)

---

## Step 4: Get Your Public Key

1. Go to **"Account"** → **"General"** in the dashboard
2. Find **"Public Key"** section
3. Copy your **Public Key** (looks like: `abcdefghijklmnop`)

---

## Step 5: Update Your Code

Open `src/pages/Contact.jsx` and replace these values around line 30:

```javascript
// Replace these with your actual values:
const serviceId = 'service_abc123';      // Your Service ID from Step 2
const templateId = 'template_xyz789';    // Your Template ID from Step 3
const publicKey = 'abcdefghijklmnop';    // Your Public Key from Step 4
```

---

## Step 6: Test Your Form

1. Save all files
2. Restart your development server if needed
3. Go to your Contact page
4. Fill out the form and click "Send Message"
5. Check your email: **uzairalijutt1@gmail.com**

---

## ✅ What Happens When Someone Sends a Message:

1. User fills out the contact form
2. Clicks "Send Message"
3. EmailJS sends the message to: **uzairalijutt1@gmail.com**
4. You receive an email with:
   - Sender's name
   - Sender's email
   - Subject
   - Budget (if selected)
   - Message content
   - Newsletter subscription status

---

## 🎯 Free Plan Limits:

- **200 emails per month** (FREE)
- Perfect for portfolio websites
- No credit card required

---

## 🔧 Troubleshooting:

### If emails are not sending:

1. **Check your EmailJS dashboard** for any errors
2. **Verify all IDs** are correctly copied (Service ID, Template ID, Public Key)
3. **Check spam folder** in uzairalijutt1@gmail.com
4. **Make sure Gmail is connected** in EmailJS dashboard
5. **Check browser console** for error messages (F12)

### Common Issues:

- **"Invalid public key"**: Double-check your Public Key
- **"Template not found"**: Verify Template ID is correct
- **"Service not found"**: Verify Service ID is correct
- **Emails in spam**: Mark EmailJS emails as "Not Spam"

---

## 📱 Alternative: Direct Email Link

If you want a simpler solution without backend, you can use a mailto link:

```jsx
<a href="mailto:uzairalijutt1@gmail.com?subject=Project Inquiry">
  Send Email
</a>
```

But EmailJS is better because:
- ✅ Professional looking
- ✅ User stays on your website
- ✅ You get formatted emails
- ✅ Tracks form submissions

---

## 🎉 That's It!

Once you complete these steps, your contact form will be fully functional and all messages will be sent to **uzairalijutt1@gmail.com**!

Need help? Check EmailJS documentation: https://www.emailjs.com/docs/
