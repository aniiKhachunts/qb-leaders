import automationImage from "../assets/5-automation-secrets.png";
import qbNotEnough from "../assets/why-qb-isnt-enough.png";

export const blogPosts = [
    {
        title: "5 Automation Secrets Accountants Should Know",
        excerpt:
            "Unlock the power of automation in bookkeeping and make your life easier with these insider strategies...",
        image: automationImage,
        date: "August 8, 2025",
        slug: "automation-secrets-for-accountants",
    },
    {
        title: "Why QuickBooks Isn’t Enough (And What To Do)",
        excerpt:
            "QuickBooks is great — but here’s why it's not enough for modern financial ops, and how to go beyond...",
        image: qbNotEnough,
        date: "August 2, 2025",
        slug: "why-quickbooks-isnt-enough",
    },
];

export const postContent = [
    {
        title: "5 Automation Secrets Accountants Should Know",
        slug: "automation-secrets-for-accountants",
        date: "August 8, 2025",
        content: `
            <p>Automation is changing the game in bookkeeping. From recurring invoices to smart categorization...</p>
            <p>Discover how to implement automated workflows using tools like QuickBooks, Zapier, and more.</p>
        `,
        tags: ["Automation", "Accounting"],
        author: "Jane Doe",
        image: automationImage,
    },
    {
        title: "Why QuickBooks Isn’t Enough (And What To Do)",
        slug: "why-quickbooks-isnt-enough",
        date: "August 2, 2025",
        content: `
            <p>QuickBooks is great for small businesses, but lacks customization, advanced reporting, and integrations.</p>
            <p>Here’s how you can level up with additional tools, dashboards, and expert workflows.</p>
        `,
        tags: ["QuickBooks", "Tools"],
        author: "John Smith",
        image: qbNotEnough,
    },
]
