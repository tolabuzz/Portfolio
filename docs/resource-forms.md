# Resource downloads and calls

Each book initially shows a Download button. Clicking it opens that book’s
name, email, and country form in a dialog. Submit saves the details
to Formspree, then closes the dialog and starts that PDF download automatically.
Each submission automatically includes the selected book’s slug in `resource`
and its full title in `bookTitle`, visible in Formspree. Visitors do not enter
these fields. This records a book request, not confirmation that a device
finished downloading the PDF.
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

Booking lives at `/book-a-call`, linked from the main navigation. Each button
opens a standalone, shareable form page:

- `/book-a-call/strategy` sends name, phone, email, and message to
  https://formspree.io/f/mdearwbr.
- `/book-a-call/coaching` sends first and last name, phone, email, up to three selected
  coaching areas, and financial readiness to https://formspree.io/f/xkjolqlv.
  Email confirmation must match, and the page states that sessions are not free.

Success confirms receipt of an enquiry, not a scheduled appointment. Resource
submissions still use their original endpoint. The homepage What I Do button
links to `/what-i-do`, combining Experience, Work, and Expertise.

## Checks

Use Node.js 24 (as in this environment):

```sh
node --experimental-strip-types --test tests/*.test.mjs
npm run lint
npm run build
```

The API tests mock Formspree and send no personal details to a real service.
Live delivery still needs the configured form endpoint and a real smoke test.
