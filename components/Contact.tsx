
import React, { useState } from 'react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  // IMPORTANT: Replace this with your actual Google Apps Script Web App URL
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzO4P8Xa8lqmK4fkIkbsG7s_niM8lAyc7MJxP6LFbqM95fuPTgpEiAbns2KYSGRIFxz/exec';

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      body: formData,
    })
    .then(response => {
        if (!response.ok && response.type !== 'opaque') {
            // Opaque responses from CORS-enabled scripts don't have status codes, but can be considered successful
            throw new Error('Network response was not ok');
        }
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
    })
    .catch(error => {
        console.error('Error:', error);
        setStatus('error');
    });
  };

  const gasScript = `
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("ContactFormSubmissions");
    if (!sheet) {
      sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet("ContactFormSubmissions");
      sheet.appendRow(["Timestamp", "Name", "Email", "Message"]);
    }
    
    var name = e.parameter.name;
    var email = e.parameter.email;
    var message = e.parameter.message;
    var timestamp = new Date();
    
    sheet.appendRow([timestamp, name, email, message]);
    
    // Optional: Send an email notification
    var emailRecipient = "your-email@example.com"; // Replace with your email
    var subject = "New Contact Form Submission from " + name;
    var emailBody = "You have a new message:\\n\\n" +
                  "Name: " + name + "\\n" +
                  "Email: " + email + "\\n" +
                  "Message: " + message;
    MailApp.sendEmail(emailRecipient, subject, emailBody);
    
    return ContentService.createTextOutput(JSON.stringify({ "result": "success" }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ "result": "error", "error": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
  `.trim();


  return (
    <section id="contact" className="min-h-screen w-screen snap-start flex justify-center items-center p-6 pb-24 md:p-8 md:pl-24">
      <div className="w-full max-w-6xl grid gap-10">
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-300 mb-8">Have a question, a business inquiry, or just want to say hi? Drop us a line.</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} required className="w-full p-3 bg-white/10 rounded-lg border border-white/20 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition" />
            <input type="email" placeholder="Your Email" value={email} onChange={e => setEmail(e.target.value)} required className="w-full p-3 bg-white/10 rounded-lg border border-white/20 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition" />
            <textarea placeholder="Your Message" value={message} onChange={e => setMessage(e.target.value)} required rows={5} className="w-full p-3 bg-white/10 rounded-lg border border-white/20 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition resize-none"></textarea>
            <button type="submit" disabled={status === 'submitting'} className="w-full p-3 text-lg font-semibold text-white bg-indigo-600 rounded-lg shadow-lg hover:bg-indigo-700 disabled:bg-gray-500 transition-colors duration-300">
              {status === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'success' && <p className="text-green-400">Message sent successfully! Thank you.</p>}
            {status === 'error' && <p className="text-red-400">Something went wrong. Please try again.</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
