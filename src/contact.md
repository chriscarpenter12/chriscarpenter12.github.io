---
layout: page
title: Contact
pageId: contact-page
---
Looking to get in touch with us? We can be reached multiple ways, as listed below. If it's urgent, a phone call would be best. Otherwise, we will reply back as soon as we receive your message. If you would like to learn more about our consulting visit our [about page]({% link_to 'about' %}) .

<div class="row">
  <div class="col-sm contact-item">
    <div>
      <i class="fas fa-mobile-alt"></i>
      <h3 class="contact-item-title">Call</h3>
      <p class="contact-item-text">We am always a phone call away to answer any questions!</p>
    </div>
    <p class="contact-item-action">
      <a href="tel:{{ site.contact.phone }}" class="btn btn-outline-secondary">Call Us at {{ site.contact.phone }}</a>
    </p>
  </div>

  <div class="col-sm contact-item">
    <div>
      <i class="fas fa-comments"></i>
      <h3 class="contact-item-title">Text</h3>
      <p class="contact-item-text">We can be reached directly via text, if that's easier too.</p>
    </div>
    <p class="contact-item-action">
      <span class="align-middle">Text Us at {{ site.contact.phone }}</span>
    </p>
  </div>

  <div class="col-sm contact-item">
    <div>
      <i class="fas fa-envelope"></i>
      <h3 class="contact-item-title">Email</h3>
      <p class="contact-item-text">Feel free to drop us a line if you have any questions.</p>
    </div>
    <p class="contact-item-action">
      <a href="mailto:{{ site.contact.email }}" class="btn btn-outline-secondary">Send Us An Email</a>
    </p>
  </div>
</div>
