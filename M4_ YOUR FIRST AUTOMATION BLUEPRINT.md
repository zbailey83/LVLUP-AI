# **MODULE 4: YOUR FIRST AUTOMATION BLUEPRINT**

**"The Invisible Employee"**

## **1\. Module Overview**

* **Prerequisite:** Module 1, 2, & 3 (You need the accounts and the content skills).  
* **Time:** 4–6 Hours (Setup \+ Testing).  
* **Goal:** Build a "Smart" Automation that captures a lead, uses AI to analyze/write a response, and saves it—all without you touching the keyboard.

---

## **2\. DETAILED WRITTEN GUIDE**

### **Introduction: From "Co-Pilot" to "Autopilot"**

In Modules 1-3, you used AI as a **Co-Pilot**. You sat in the chair, you typed the prompt, and you reviewed the output. This is great, but it still requires *you*.

In Module 4, we switch to **Autopilot**.

We are going to build a system where the AI works while you are sleeping. We will introduce the concept of "The Stack": connecting a **Trigger** (something happens), an **Intelligence Layer** (AI thinks about it), and an **Action** (something gets done).

**The Project:** We will build a **"Smart Lead Processor."**

Instead of manually reading every contact form submission and writing a reply, your system will:

1. Detect a new lead.  
2. Read their message.  
3. Decide if they are "High Priority" or "Low Priority."  
4. Draft a personalized email response for you to review.

### **Prerequisites**

* **Zapier Account:** (Free tier is okay for basics, but the "ChatGPT" integration usually requires a Starter plan. Make.com is a free alternative, but has a steeper learning curve. We will use Zapier terminology for this guide).  
* **OpenAI API Key:** You will need to generate an API key from platform.openai.com (Note: This is separate from your $20/month ChatGPT Plus subscription; it operates on a pay-as-you-go credit system, usually costing pennies).  
* **Google Sheet:** A simple sheet with headers: *Name, Email, Message, AI Analysis, Draft Reply*.

---

### **Core Concept: The Automation Anatomy**

Every automation consists of three parts:

1. **The Trigger:** The starting gun. (e.g., "A new row in Google Sheets" or "A new Typeform entry").  
2. **The Brain (The AI Step):** This is where magic happens. We don't just move data; we *transform* it. We send the user's message to ChatGPT and ask it to categorize it or write a reply.  
3. **The Action:** The result. (e.g., "Create a Draft in Gmail").

---

### **Step-by-Step Implementation**

#### **Step 1: The Foundation (Google Sheets)**

Create a Google Sheet. This will act as your database.

* **Row 1 Headers:** Timestamp, Client Name, Client Email, Client Message, AI Priority Score, AI Draft Reply.  
* *Simulate Data:* Fill in Row 2 with fake data so we have something to test.  
  * *Name:* John Doe  
  * *Message:* "Hi, I'm interested in your enterprise pricing for 500 users."

#### **Step 2: Connect the Trigger (Zapier)**

1. Log into Zapier. Click **"Create Zap"**.  
2. **Trigger App:** Select **Google Sheets**.  
3. **Trigger Event:** Select **"New Spreadsheet Row"**.  
4. **Account:** Connect your Google account.  
5. **Trigger:** Select the Sheet you just made.  
6. **Test:** Click "Test Trigger." It should find the "John Doe" row you created.

#### **Step 3: The Intelligence Layer (ChatGPT)**

This is the differentiator.

1. **Action App:** Search for **ChatGPT** (or OpenAI).  
2. **Event:** Select **"Conversation"** or **"Ask ChatGPT"**.  
3. **Account:** You will need to paste your OpenAI API Key here.  
4. **The Prompt Setup:**  
   * This is where you paste your prompt, but you insert **dynamic data** from Step 1\.  
   * *System Instruction:* "You are a sales assistant."  
   * *User Message:* "Analyze this lead.  
     * Name: \[Click and select 'Client Name' from Step 1\]  
     * Message: \[Click and select 'Client Message' from Step 1\]  
     * Task: Determine if this is 'High Priority' (ready to buy) or 'Low Priority' (just looking). Then, draft a short, friendly email reply addressing their specific question.  
     * Format: JSON with two fields: 'Priority' and 'DraftBody'."

#### **Step 4: The Output (Gmail)**

1. **Action App:** Select **Gmail**.  
2. **Event:** Select **"Create Draft"**. (Never select "Send Email" automatically until you trust the system 100%).  
3. **Setup:**  
   * *To:* \[Select 'Client Email' from Step 1\]  
   * *Subject:* "Re: Your inquiry"  
   * *Body:* \[Select the 'DraftBody' output from the ChatGPT step\].  
4. **Test:** Run the step. Go check your actual Gmail "Drafts" folder. You should see a magic email waiting for you.

---

### **Testing & Results**

You have just built a machine. Now, break it.

1. **The "Spam" Test:** Add a row in your sheet with a message like "Sell me SEO services."  
2. **Run the Zap:** Check the draft. The AI should ideally identify this as Low Priority (if you prompted it correctly).  
3. **The "High Value" Test:** Add a row saying "I have a $50k budget."  
4. **Check the Draft:** Ensure the tone matches the high value.

---

### **Optimization: "Human-in-the-Loop"**

The biggest fear with automation is: *"What if the AI says something stupid?"*

That is why we used **"Create Draft"** in Gmail, not "Send Email."

* **The Workflow:**  
  * Lead comes in \-\> AI Drafts it \-\> You get a notification \-\> You open Gmail, read the draft (it's 90% done), tweak one sentence \-\> **Hit Send.**  
* **ROI:** You didn't have to open the CRM, look up the client, type "Hello," or think of a structure. You just acted as the Editor-in-Chief. This saves 5–10 minutes *per email*.

---

### **Troubleshooting**

* **Issue:** *API Error / Quota Exceeded.*  
  * **Fix:** Log into OpenAI. You likely haven't added a credit card to the API billing section (this is different from your ChatGPT Plus subscription). Add $5 credit to start.  
* **Issue:** *The AI output includes "Here is the email draft:" text.*  
  * **Fix:** Refine your Prompt in Step 3\. Add a Constraint: *"Return ONLY the body of the email. Do not include introductory text like 'Here is the draft'."*  
* **Issue:** *Zapier can't find the data.*  
  * **Fix:** Ensure your Google Sheet has headers in the first row and at least one row of dummy data.

---

### **Next Steps**

You have completed the **Core Linear Track**. You have:

1. Set up your environment (Module 1).  
2. Mastered the art of Prompting (Module 2).  
3. Built a Content Engine (Module 3).  
4. Automated your Operations (Module 4).

You are now a **Level 1 AI Operator**. The next phase of your journey (Elective Modules) will dive into specific verticals like Image Generation, Coding with AI, or Building Custom GPTs.

---

## **3\. KEY PROMPTS (For inside the Automation)**

These are prompts designed specifically for API/Zapier use. They handle **dynamic variables**.

**Prompt 1: The "Lead Scorer & Drafter" (Paste this into the ChatGPT Step)**

**Role:** You are a senior sales development rep.

**Input Data:**

* Lead Name: \[INSERT NAME VARIABLE\]  
* Lead Message: \[INSERT MESSAGE VARIABLE\]

**Task:**

1. Analyze the message sentiment and intent.  
2. Assign a 'Priority Score' from 1-5 (5 is ready to buy).  
3. Write a response email.  
   * If Priority is 1-2: Be polite but brief. Direct them to our FAQ.  
   * If Priority is 3-5: Be warm, enthusiastic, and propose a meeting time.

**Constraint:**

* Output ONLY the email body text. Do not include subject lines or "Here is the email."

**Prompt 2: The "Data Cleaner" (Use this to fix messy form data)**

**Role:** You are a data formatting bot.

**Input:** \[INSERT MESSY TEXT VARIABLE\]

**Task:** Extract the phone number and format it as (XXX) XXX-XXXX. If no phone number exists, return "N/A".

**Constraint:** Return ONLY the formatted number. No other text.

**Prompt 3: The "Sentiment Router" (For customer support)**

**Input:** \[INSERT SUPPORT TICKET TEXT\]

**Task:** Classify this ticket into one of three categories:

1. "Urgent/Angry" (User is upset or system is down).  
2. "Billing" (Money related).  
3. "General" (Everything else).  
   **Constraint:** Return ONLY the single word category name.

---

## **4\. RESOURCE LIST**

**Required Tools:**

* **Zapier:** [zapier.com](https://zapier.com/) (User-friendly, standard for business).  
* **OpenAI API:** [platform.openai.com](https://platform.openai.com/) (The engine).  
* **Google Workspace:** Sheets & Gmail.

**Alternatives:**

* **Make (formerly Integromat):** [make.com](https://make.com/) (More visual, cheaper at scale, but harder to learn).  
* **N8N:** [n8n.io](https://n8n.io/) (Open source, technical).

**Templates:**

* **The "Smart Lead" Google Sheet:** (Create a sheet with headers: Name, Email, Message, Priority, Draft).

