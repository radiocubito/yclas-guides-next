---
title:
description:
extends: _layouts.documentation
section: content
---

# 2checkout Configuration


First, you need to create an account on  [2checkout](https://www.2checkout.com/). You have to enter your personal/business details to activate your account, then go to your dashboard and click  **Account**  ->  **Site Management**.

From there you have to follow the instructions:

- Select the  **Pricing Currency**  you want to use.
- Select  **Refund Policy**  and  **Privacy Policy**.
- Choose  **Header Redirect (Your URL)**.
- Enter http://yourdomain.com/twocheckout/pay/null/ in  **Approved URL**  field.

Now, Login to your **Admin Panel** ->  **Integrations**  ->  **2checkout**  and fill  **Merchant Code**  and  **Secret Word**  fields. You can find these values in your 2checkout dashboard (see the image below).

![](/assets/images/2checkout.png)

*This guide will teach you how to configure your 2checkout account so that it works with your Yclas website.*


<iframe width="100%" height="400px" src="https://www.youtube.com/embed/ZrYKcSjHgEY" title="Yclas video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**Related posts:**

- [How to set up payment gateways](/docs/payment-set-up-payment-gateways)
- [Marketplace with Stripe Connect Express](/docs/payment-set-up-marketplace-with-srtipe-connect-express)
