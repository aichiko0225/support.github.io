// support site for app store review
import React from 'react';

function SupportPage() {
  return (
    <div>
      <h1>Support Page</h1>
      <p>This is the support page for your app.</p>
      <p>You can provide support to your users here.</p>
      <p>Thank you for using our app!</p>

      {/* contact us with email aichiko66@gmail.com, or call us with phone number */}
      <p>
        <a href="mailto:aichiko66@gmail.com">Contact Us</a>
      </p>
      <p>
        <a href="tel:+1234567890">Call Us</a>
      </p>
    </div>
  );
}

export default SupportPage;