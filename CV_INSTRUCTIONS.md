# 📄 How to Add Your CV to Your Portfolio Website

## 🎯 Quick Steps:

### 1. **Prepare Your CV File**
- Save your CV/Resume as a **PDF file**
- Name it exactly: `resume.pdf`
- Make sure the file size is reasonable (under 5MB for web)

### 2. **Add CV to Your Website**
- Copy your `resume.pdf` file
- Paste it into the `public` folder of your portfolio
- Replace the existing placeholder `resume.pdf` file

### 3. **File Location**
```
portfolio/
├── public/
│   └── resume.pdf  ← Your actual CV goes here
├── src/
└── ...
```

## ✅ **What I've Already Set Up For You:**

### **Hero Section CV Buttons**
I've added two buttons in your Hero section:

1. **"View Resume"** 👁️ - Opens CV in new tab for viewing
2. **"Download"** 📥 - Downloads CV file directly

### **Button Features:**
- ✅ **Professional styling** with hover effects
- ✅ **Mobile responsive** design
- ✅ **Accessibility** with proper ARIA labels
- ✅ **SEO friendly** with proper file naming

### **Button Locations:**
- **Primary location**: Hero section (main CTA area)
- **File path**: `/resume.pdf` (automatically served from public folder)
- **Download name**: `Muhammad_Hammad_Asif_Resume.pdf`

## 🎨 **Button Styling:**

### **View Resume Button** (Blue)
- Opens in new tab for viewing
- Professional blue color scheme
- File icon for clarity

### **Download Button** (Outline)
- Direct download functionality
- Outline style for secondary action
- Download icon for clarity

## 📱 **Mobile Responsive:**
- Buttons stack nicely on mobile
- Touch-friendly sizing
- Proper spacing and alignment

## 🔧 **Technical Details:**

### **File Serving:**
- Files in `public/` folder are automatically served
- URL: `yourwebsite.com/resume.pdf`
- No additional configuration needed

### **Download Behavior:**
- **View button**: Opens in browser (target="_blank")
- **Download button**: Forces download (download attribute)

## 🚀 **Next Steps:**

1. **Replace the placeholder** `public/resume.pdf` with your actual CV
2. **Test the buttons** by running your development server
3. **Verify download** works correctly
4. **Deploy** your updated website

## 💡 **Pro Tips:**

### **CV Best Practices:**
- Keep file size under 2MB for fast loading
- Use a professional filename
- Ensure PDF is searchable (not just an image)
- Include your name in the filename

### **SEO Benefits:**
- Search engines can index your CV
- Direct link sharing capability
- Professional presentation

### **Alternative Locations:**
If you want to add CV links elsewhere:
- About section
- Contact section  
- Navigation menu
- Footer

## 🔗 **Current Implementation:**

```jsx
// View Resume Button
<a
  href="/resume.pdf"
  className="btn btn-secondary"
  target="_blank"
  rel="noopener noreferrer"
>
  <FileText size={20} />
  View Resume
</a>

// Download Button  
<a
  href="/resume.pdf"
  className="btn btn-outline"
  download="Muhammad_Hammad_Asif_Resume.pdf"
>
  <Download size={20} />
  Download
</a>
```

## ✅ **Ready to Use!**

Your CV download functionality is now fully implemented and ready to use. Just add your actual PDF file to the public folder and you're all set!

---

**Need help?** The buttons are already styled and functional - just replace the placeholder PDF with your actual resume file.
