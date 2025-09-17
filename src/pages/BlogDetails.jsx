import React from "react";
import { useParams, Link } from "react-router-dom";

const blogData = {
  1: {
    title: "Understanding Life Insurance",
    content: `
      Life insurance is designed to provide financial security for your loved ones in case of unforeseen circumstances. 
      It ensures your dependents won’t struggle financially if something happens to you.

      ## Why It Matters
      Life insurance guarantees peace of mind and helps cover:
      - Children’s education
      - Outstanding loans or mortgages
      - Daily living expenses for your family

      ## Types of Life Insurance
      - **Term Life:** Affordable and fixed for a period (10–30 years).
      - **Whole Life:** Lifetime coverage with cash value growth.
      - **Universal Life:** Flexible premiums and adjustable cover.

      > "Insurance is not just a policy; it’s peace of mind for generations."
    `,
  },
  2: {
    title: "Smart Financial Planning",
    content: `
      Financial planning is all about making your money work for you. It’s the art of balancing today’s needs with tomorrow’s goals.

      ## Key Steps
      1. **Budgeting:** Track income and expenses for better control.
      2. **Savings:** Build a consistent saving habit.
      3. **Investing:** Put money into assets that grow over time.
      4. **Insurance:** Protect against unexpected losses.
      5. **Retirement:** Plan early for financial independence later.

      ## Pro Tips
      - Start small but stay consistent.
      - Avoid lifestyle inflation.
      - Revisit your plan yearly to adjust for new goals.

      > "Failing to plan is planning to fail."
    `,
  },
  3: {
    title: "Motor Insurance Explained",
    content: `
      Motor insurance protects you against financial loss in case of theft, accidents, or damages. 
      It is mandatory in most countries before driving.

      ## Types of Coverage
      - **Third-Party Liability:** Protects against damage or injury you cause to others.
      - **Comprehensive Cover:** Includes damage to your own vehicle plus third-party.
      - **Add-Ons:** Roadside assistance, zero-depreciation cover, or personal accident cover.

      ## Quick Claim Tips
      - Report incidents immediately to your insurer.
      - Keep a digital copy of your policy in your phone.
      - Document accidents with photos for smoother claims.

      > "A good motor insurance policy gets you back on the road faster."
    `,
  },
  4: {
    title: "Health Insurance Basics",
    content: `
      Health insurance covers medical expenses, ensuring you receive treatment without financial strain. 
      It’s one of the most essential forms of protection.

      ## Benefits
      - Hospitalization costs covered (room, surgery, ICU).
      - Outpatient care and prescription drugs.
      - Preventive check-ups and vaccinations.
      - Maternity and newborn care in some policies.

      ## Choosing a Plan
      - Check the hospital network.
      - Understand exclusions and waiting periods.
      - Balance premiums with benefits.

      > "Your health is your wealth — protect it wisely."
    `,
  },
  5: {
    title: "Retirement Planning 101",
    content: `
      Retirement planning helps you prepare financially for life after work so you can enjoy freedom without money worries.

      ## Why Plan Early?
      - Compounding grows your savings over decades.
      - Inflation erodes unplanned savings.
      - Healthcare costs rise as you age.

      ## Steps to Get Started
      - Open a retirement savings account (pension, IRA, or 401k).
      - Diversify investments: stocks, bonds, real estate.
      - Set aside at least 10–15% of your income.

      ## Bonus Tip
      Review your retirement plan every 5 years to adjust for inflation and lifestyle changes.

      > "Retirement isn’t the end of the road; it’s the beginning of the open highway."
    `,
  },
  6: {
    title: "Travel Insurance Explained",
    content: `
      Travel insurance protects you from unexpected problems while traveling abroad. It adds peace of mind so you can focus on adventure.

      ## Coverage May Include
      - Trip cancellations and interruptions.
      - Lost or delayed baggage.
      - Emergency medical treatment abroad.
      - Evacuation in case of political unrest or disasters.

      ## When to Buy
      - Purchase immediately after booking tickets for maximum benefits.
      - Check if your credit card offers complimentary travel insurance.

      > "Pack your bags, not your worries."
    `,
  },
  7: {
    title: "Home Insurance Guide",
    content: `
      Home insurance provides financial protection for your house and belongings against unexpected events.

      ## Common Coverage
      - Fire, theft, and vandalism.
      - Natural disasters (floods, earthquakes, storms).
      - Liability protection if someone gets injured on your property.

      ## Why It’s Important
      - Rebuilding a home after disaster can cost millions.
      - Belongings like electronics and jewelry are protected.
      - Mortgage lenders often require it.

      ## Extra Add-Ons
      - Coverage for art or antiques.
      - Alternative accommodation if your home is uninhabitable.

      > "A safe home is where peace of mind begins."
    `,
  },
  8: {
    title: "Building Emergency Funds",
    content: `
      An emergency fund is your safety net for life’s financial curveballs like job loss, medical bills, or urgent car repairs.

      ## Why It Matters
      - Reduces stress during crises.
      - Keeps you from borrowing at high interest.
      - Offers freedom in tough decisions.

      ## How to Build One
      - Start with as little as $10 a week.
      - Save 3–6 months of living expenses.
      - Keep money in an accessible, high-interest savings account.

      ## Golden Rule
      Only use it for genuine emergencies, not vacations or shopping sprees.

      > "An emergency fund turns a crisis into a setback — not a disaster."
    `,
  },
  9: {
    title: "Business Insurance Essentials",
    content: `
      Business insurance protects your company against unexpected financial losses so you can keep running even when risks hit.

      ## Common Types
      - **Property Insurance:** Covers buildings, equipment, and stock.
      - **Liability Insurance:** Protects against lawsuits or customer injuries.
      - **Employee Coverage:** Includes workers’ compensation and health insurance.

      ## Why Businesses Need It
      - Builds credibility with clients and partners.
      - Shields cash flow from disruptions.
      - Ensures legal compliance in many industries.

      ## Pro Tip
      Tailor your coverage to your business type — a bakery’s needs differ from a tech startup’s.

      > "Protecting your business today ensures growth tomorrow."
    `,
  },
};




const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogData[id];

  if (!blog) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold">Blog not found</h2>
        <Link to="/blog" className="text-primary hover:underline mt-4 inline-block">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <>
      <nav className="px-4 py-2 bg-gray-50 dark:bg-gray-900 border-b">
        <Link to="/blog" className="text-primary hover:underline">
          ← Back to Blog
        </Link>
      </nav>

      <article className="max-w-3xl mx-auto px-4 py-10 prose prose-lg dark:prose-invert">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">{blog.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: blog.content.replace(/\n/g, "<br/>") }} />
      </article>
    </>
  );
};

export default BlogDetails;
