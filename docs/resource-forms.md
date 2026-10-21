# Resource downloads and calls

Each book initially shows a Download button. Clicking it opens that book’s
name, email, and country form in a dialog. Submit saves the details
to Formspree, then closes the dialog and starts that PDF download automatically.
Each submission includes the selected book’s slug in the resource field.
Failed submissions preserve the entered details and never start a download.
After a successful submission, the book’s Download button can retry the download
without another submission for the rest of that page visit.
This is a lead capture flow: the static PDFs remain publicly addressable; it
is not an authentication or paid-access system.

## Formspree

The site owner supplied `https://formspree.io/f/xbgdvzww`, which is the default
submission endpoint. No additional Vercel configuration is needed. To change
forms later, optionally set `RESOURCE_FORM_ENDPOINT` to another Formspree HTTPS
endpoint in Vercel and redeploy.

Complete any email verification required by Formspree. After deployment,
submit the website form with your own test details, confirm name, email,
country, and source appear in Formspree, then check all three downloads.

No form submissions are written to local files or application logs. Formspree
stores the submissions. Rejected or unconfirmed submissions return an error
without unlocking downloads. The form does not subscribe visitors to a mailing
list.

## Calls

Booking now lives at `/book-a-call`, linked from the main navigation.
Coaching links to https://my.forms.app/cewafrica/coachingbytola.
Book a Strategy Call opens an enquiry form with name, email, country, and a
short description of the problem. The server sends these details to
https://formspree.io/f/mdearwbr. Success confirms receipt of an enquiry, not a
scheduled appointment. Resource submissions still use their original endpoint.

## Checks

Use Node.js 24 (as in this environment):

```sh
node --experimental-strip-types --test tests/*.test.mjs
npm run lint
npm run build
```

The API tests mock Formspree and send no personal details to a real service.
Live delivery still needs the configured form endpoint and a real smoke test.
