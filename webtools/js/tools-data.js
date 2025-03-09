// Tools data structure
const toolsData = [
    // Image Tools
    {
        name: "Image to PNG Converter",
        description: "Convert your images to PNG format easily",
        category: "image",
        url: "tools/image/image-to-png.html",
        icon: "image"
    },
    {
        name: "Image to JPG Converter",
        description: "Convert images to JPG/JPEG format",
        category: "image",
        url: "tools/image/image-to-jpg.html",
        icon: "image"
    },
    {
        name: "Image Resizer",
        description: "Resize your images to any dimension",
        category: "image",
        url: "tools/image/image-resizer.html",
        icon: "expand"
    },
    {
        name: "WebP Converter",
        description: "Convert images to and from WebP format",
        category: "image",
        url: "tools/image/webp-converter.html",
        icon: "image"
    },
    {
        name:"image compressor",    
        description:"Compress your images to reduce file size",
        category:"image",
        url:"tools/image/image-compressor.html",
        icon:"image"
    },
    {
        name:"Image cropper",
        description:"Crop your images to the desired size",
        category:"image",
        url:"tools/image/image-cropper.html",
        icon:"image"
    },
    {
        name:"qr-generator",
        description:"Generate QR codes for text and URLs",
        category:"misc",
        url:"tools/image/qr-generator.html",
        icon:"qrcode"
    },
    // Text Tools
    {
        name: "Word Counter",
        description: "Count words, characters, and paragraphs",
        category: "text",
        url: "tools/text/word-counter.html",
        icon: "font"
    },
    {
        name: "Text Case Converter",
        description: "Convert text case to uppercase, lowercase, or title case",
        category: "text",
        url: "tools/text/case-converter.html",
        icon: "text-height"
    },
    {
        name: "Lorem Ipsum Generator",
        description: "Generate Lorem Ipsum placeholder text",
        category: "text",
        url: "tools/text/lorem-ipsum.html",
        icon: "text-width"
    },
    {
        name: "Text Diff Checker",
        description: "Compare and find differences between texts",
        category: "text",
        url: "tools/text/diff-checker.html",
        icon: "code-compare"
    },
    {
        name: "Markdown Editor",
        description: "Write and preview Markdown with live preview",
        category: "text",
        url: "tools/text/markdown-editor.html",
        icon: "markdown"
    },
    // Developer Tools
    {
        name: "JSON Formatter",
        description: "Format and validate JSON data",
        category: "developer",
        url: "tools/developer/json-formatter.html",
        icon: "code"
    },
    {
        name: "CSS Flexbox Generator",
        description: "Visual CSS Flexbox layout generator",
        category: "developer",
        url: "tools/developer/flexbox-generator.html",
        icon: "columns"
    },
    // Converter Tools
    {
        name: "Unit Converter",
        description: "Convert between different units of measurement",
        category: "converter",
        url: "tools/converter/unit-converter.html",
        icon: "exchange-alt"
    },
    {
        name: "Color Code Converter",
        description: "Convert between HEX, RGB, and HSL color codes",
        category: "converter",
        url: "tools/converter/color-converter.html",
        icon: "palette"
    },
    {
        name: "Base64 Converter",
        description: "Encode and decode Base64 strings",
        category: "converter",
        url: "tools/converter/base64-converter.html",
        icon: "file-code"
    },
    {
        name: "Time Zone Converter",
        description: "Convert time between different time zones",
        category: "converter",
        url: "tools/converter/timezone-converter.html",
        icon: "clock"
    },
    // Math Tools
    {
        name: "Scientific Calculator",
        description: "Advanced calculator with scientific functions",
        category: "math",
        url: "tools/math/scientific-calculator.html",
        icon: "calculator"
    },
    {
        name: "Percentage Calculator",
        description: "Calculate percentages and percentage changes",
        category: "math",
        url: "tools/math/percentage-calculator.html",
        icon: "percent"
    },
    {
        name: "BMI Calculator",
        description: "Calculate Body Mass Index (BMI)",
        category: "math",
        url: "tools/math/bmi-calculator.html",
        icon: "weight"
    },
    {
        name: "Age Calculator",
        description: "Calculate age between two dates",
        category: "math",
        url: "tools/math/age-calculator.html",
        icon: "calendar-alt"
    },
    // Security Tools
    {
        name: "Password Generator",
        description: "Generate secure random passwords",
        category: "security",
        url: "tools/security/password-generator.html",
        icon: "key"
    },
    {
        name: "Hash Generator",
        description: "Generate MD5, SHA-1, SHA-256 hashes",
        category: "security",
        url: "tools/security/hash-generator.html",
        icon: "lock"
    },
    {
        name: "Encryption Tool",
        description: "Encrypt and decrypt text using AES",
        category: "security",
        url: "tools/security/encryption-tool.html",
        icon: "shield-alt"
    },
    // SEO Tools
    {
        name: "Meta Tags Generator",
        description: "Generate meta tags for your website",
        category: "seo",
        url: "tools/seo/meta-tags-generator.html",
        icon: "tags"
    },
    {
        name: "Robots.txt Generator",
        description: "Create robots.txt files for your website",
        category: "seo",
        url: "tools/seo/robots-txt-generator.html",
        icon: "robot"
    },
    {
        name: "XML Sitemap Generator",
        description: "Generate XML sitemaps for better SEO",
        category: "seo",
        url: "tools/seo/sitemap-generator.html",
        icon: "sitemap"
    },
    {
        name: "Open Graph Generator",
        description: "Create Open Graph meta tags for social sharing",
        category: "seo",
        url: "tools/seo/open-graph-generator.html",
        icon: "share-alt"
    },
    // Social Tools
    {
        name: "Social Media Image Resizer",
        description: "Resize images for social media platforms",
        category: "social",
        url: "tools/social/image-resizer.html",
        icon: "crop"
    },
    {
        name: "Instagram Bio Link Generator",
        description: "Create formatted bio links for Instagram",
        category: "social",
        url: "tools/social/bio-link-generator.html",
        icon: "instagram"
    },
    {
        name: "Twitter Card Generator",
        description: "Generate Twitter Card meta tags",
        category: "social",
        url: "tools/social/twitter-card-generator.html",
        icon: "twitter"
    },
    {
        name: "Social Share Button Generator",
        description: "Create custom social share buttons",
        category: "social",
        url: "tools/social/share-button-generator.html",
        icon: "share-square"
    },
    // Misc Tools
    {
        name: "QR Code Generator",
        description: "Generate QR codes for text and URLs",
        category: "misc",
        url: "tools/misc/qr-code-generator.html",
        icon: "qrcode"
    },
    {
        name: "Random Number Generator",
        description: "Generate random numbers with custom ranges",
        category: "misc",
        url: "tools/misc/random-number.html",
        icon: "dice"
    },
    {
        name: "UUID Generator",
        description: "Generate random UUIDs/GUIDs",
        category: "misc",
        url: "tools/misc/uuid-generator.html",
        icon: "fingerprint"
    }
];

// Function to get all tools
function getTools() {
    return Promise.resolve(toolsData);
}

// Function to get tools by category
function getToolsByCategory(category) {
    return Promise.resolve(toolsData.filter(tool => tool.category === category));
}

// Function to search tools
function searchTools(query) {
    query = query.toLowerCase();
    return Promise.resolve(toolsData.filter(tool => 
        tool.name.toLowerCase().includes(query) || 
        tool.description.toLowerCase().includes(query)
    ));
}

// Export functions if using modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        getTools,
        getToolsByCategory,
        searchTools
    };
} 
