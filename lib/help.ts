export interface HelpArticle {
  slug: string;
  title: string;
  category: string;
  description: string;
  content: string;
}

export const HELP_ARTICLES: HelpArticle[] = [
  {
    slug: 'make-booking',
    title: 'How to make a booking',
    category: 'Booking',
    description: 'Step-by-step guide to booking your dream tour package.',
    content: `
## Book Your Tour in Minutes

Booking a tour on GoShareBD is simple and straightforward.

### Step-by-Step Guide

1. **Find Your Tour**
   - Browse or search for tours
   - Click on a tour to view details

2. **Select Your Date**
   - Choose your preferred travel date from the calendar
   - Check availability

3. **Enter Traveler Details**
   - Number of adults and children
   - Special requirements or requests

4. **Review & Pay**
   - Review your booking summary
   - Complete payment securely

5. **Confirmation**
   - Receive instant confirmation via email
   - Get your e-ticket and itinerary

> **Note:** Bookings can be made up to 24 hours before departure, subject to availability.
    `,
  },
  {
    slug: 'age-categories',
    title: 'Age categories explained',
    category: 'Booking',
    description: 'Understanding how age categories affect pricing.',
    content: `
## Age Categories

We use four age categories to determine pricing for our tours.

### Categories

1. **Adults (15+)**
   - Full price
   - Required to provide ID

2. **Pre-teen (11-14)**
   - 75% of adult price
   - Required to provide ID

3. **Child (6-10)**
   - 50% of adult price
   - Must be accompanied by adult

4. **Infant (0-5)**
   - Free of charge
   - Not counted in minimum group size

> **Note:** Age is calculated on the date of travel, not the booking date.
    `,
  },
  {
    slug: 'payment-methods',
    title: 'Accepted payment methods',
    category: 'Payments',
    description: 'Learn about the payment methods we accept.',
    content: `
## Payment Methods

We offer several convenient payment options.

### Available Methods

- **bKash** - Instant mobile payments
- **Nagad** - Quick digital payments
- **Bank Transfer** - Direct bank transfers
- **Cash** - Pay at our office

### Payment Process

1. Select your preferred method
2. Complete the payment
3. Upload receipt (for bank transfer)
4. Receive confirmation

> **Note:** Full payment is required to confirm your booking.
    `,
  },
  {
    slug: 'refund-policy',
    title: 'Refund policy explained',
    category: 'Cancellations & Refunds',
    description: 'Understand our refund policy and timeline.',
    content: `
## Refund Policy

We aim to make cancellations fair for everyone.

### Refund Timeline

| Cancellation Time | Refund |
|-------------------|--------|
| 7+ days before | 100% |
| 3-6 days before | 50% |
| Within 48 hours | No refund |

### Processing Time

- Refunds take 5-7 business days
- Original payment method used
- You'll receive email confirmation

### Non-Refundable Cases

- No-show on tour day
- Partial tour completion
- Violation of tour terms

> **Note:** Special tours may have different refund terms. Check booking details.
    `,
  },
  {
    slug: 'what-to-bring',
    title: 'What to bring on your tour',
    category: 'During the Tour',
    description: 'Essential packing list for your tour.',
    content: `
## Packing List

Here's everything you need for your tour.

### Essential Documents

- National ID or Passport
- Booking confirmation (printed or digital)
- Emergency contact numbers

### Clothing

- Comfortable walking shoes
- Weather-appropriate clothing
- Rain jacket (for monsoon season)
- Warm layers (for hill tracts)

### Personal Items

- Sunscreen and sunglasses
- Insect repellent
- Personal medications
- Water bottle

### Optional Items

- Camera
- Power bank
- Small day bag

> **Note:** Guides will provide group equipment for activities like trekking.
    `,
  },
  {
    slug: 'medical-disclosure',
    title: 'Disclosing medical conditions',
    category: 'Safety',
    description: 'Why and how to disclose medical conditions.',
    content: `
## Medical Disclosure

Your safety is our priority.

### Why Disclosure Matters

- Helps guides prepare
- Ensures appropriate activities
- Allows for emergency planning

### What to Disclose

- Heart conditions
- Diabetes
- Asthma
- Allergies
- Mobility issues
- Pregnancy

### How to Disclose

1. During booking process
2. Contact us after booking
3. Inform your guide on tour day

> **Note:** All medical information is treated confidentially and only shared with your guide for safety purposes.
    `,
  },
  {
    slug: 'create-account',
    title: 'How to create an account',
    category: 'Getting Started',
    description: 'Step-by-step guide to creating your GoShareBD account.',
    content: `
## Create Your Account

Join thousands of travelers exploring Bangladesh.

### Steps

1. Click "Sign Up" on the app
2. Enter your email or sign in with Google
3. Verify your email address
4. Complete your profile

### Benefits

- Save booking history
- Track your tours
- Leave reviews
- Manage bookings

> **Note:** You can also book as a guest without creating an account.
    `,
  },
  {
    slug: 'google-signin',
    title: 'Signing in with Google',
    category: 'Getting Started',
    description: 'How to use Google to sign in quickly.',
    content: `
## Google Sign-In

Quick and secure access to your account.

### How It Works

1. Click "Sign in with Google"
2. Select your Google account
3. Grant permission
4. You're in!

### Benefits

- No password needed
- Faster sign-in
- Sync with Google

> **Note:** We never access your Google password or share your data.
    `,
  },
  {
    slug: 'browsing-packages',
    title: 'Browsing and filtering tour packages',
    category: 'Getting Started',
    description: 'How to find the perfect tour for you.',
    content: `
## Browse Tours

Find your ideal adventure.

### Using Filters

- **Destination** - Choose your preferred location
- **Duration** - Day trips to week-long tours
- **Price** - Budget-friendly to premium
- **Activities** - Adventure, cultural, nature

### Sorting Options

- Price (low to high)
- Price (high to low)
- Rating
- Popularity

> **Tip:** Use multiple filters to narrow down your search.
    `,
  },
  {
    slug: 'package-inclusions',
    title: 'Understanding package inclusions',
    category: 'Getting Started',
    description: 'What\'s included in your tour package.',
    content: `
## Package Inclusions

Know exactly what's included.

### Typically Included

- Transportation
- Accommodation (for multi-day tours)
- Guide services
- Entry fees
- Activities

### Typically Excluded

- Meals (unless specified)
- Personal expenses
- Tips
- Optional activities

> **Note:** Check each package page for specific details.
    `,
  },
  {
    slug: 'read-itinerary',
    title: 'How to read a tour itinerary',
    category: 'Getting Started',
    description: 'Understanding your tour schedule.',
    content: `
## Reading Your Itinerary

Your guide for the tour.

### Key Sections

1. **Day Overview** - What you'll do each day
2. **Timing** - Pickup and return times
3. **Activities** - What's included
4. **Meals** - What's provided
5. **Notes** - Important information

> **Note:** Itineraries may change due to weather or other circumstances.
    `,
  },
  {
    slug: 'adding-members',
    title: 'Adding group members',
    category: 'Booking',
    description: 'How to add more people to your booking.',
    content: `
## Adding Group Members

Book for friends and family.

### During Booking

1. Select number of adults
2. Add children if applicable
3. Enter each traveler's details

### After Booking

Contact us to add more members, subject to availability.

> **Note:** Each adult must provide their own ID details.
    `,
  },
  {
    slug: 'children-infants',
    title: 'Booking for children and infants',
    category: 'Booking',
    description: 'Policies for young travelers.',
    content: `
## Children on Tour

Family-friendly adventures.

### Age Policies

- Children welcome on most tours
- Age restrictions vary by tour
- Infants (0-5) travel free on lap

### Requirements

- Children under 18 need adult supervision
- Valid ID for ages 15+
- Parental consent for unaccompanied minors

> **Note:** Some adventurous tours may have higher age limits.
    `,
  },
  {
    slug: 'after-booking',
    title: 'What happens after I book?',
    category: 'Booking',
    description: 'Your booking journey after confirmation.',
    content: `
## After Booking

What to expect next.

### Immediate Steps

1. Booking confirmation email
2. Payment verification
3. E-ticket generation

### Before Tour

- Itinerary details sent 48 hours before
- Pickup instructions
- Guide contact details

### On Tour Day

- Meet at pickup point
- Present confirmation
- Enjoy your tour!

> **Note:** Keep your confirmation accessible throughout the tour.
    `,
  },
  {
    slug: 'booking-for-others',
    title: 'Can I book for someone else?',
    category: 'Booking',
    description: 'Booking tours for friends or family.',
    content: `
## Booking for Others

Yes, you can book for others.

### Requirements

- Provide accurate traveler details
- Ensure they have ID
- Share confirmation with them

### Lead Booker Responsibility

As the lead booker, you're responsible for:
- Communication with us
- Ensuring all travelers agree to terms
- Collecting any payments

> **Note:** Each traveler needs their own account for reviews.
    `,
  },
  {
    slug: 'how-payment-works',
    title: 'How payment works',
    category: 'Payments',
    description: 'Understanding the payment process.',
    content: `
## Payment Process

Simple and secure payments.

### Steps

1. Select tour and date
2. Enter traveler details
3. Choose payment method
4. Complete payment
5. Receive confirmation

### Security

- Encrypted transactions
- Secure payment partners
- No card details stored

> **Note:** Prices include 15% VAT where applicable.
    `,
  },
  {
    slug: 'pricing-calculation',
    title: 'How pricing is calculated',
    category: 'Payments',
    description: 'Understanding tour pricing.',
    content: `
## Pricing Explained

Transparent pricing.

### Factors

- Base package price
- Age category adjustments
- Group size
- Seasonal rates

### What's Included

- Transportation
- Guide
- Entry fees
- Activities

### VAT

All prices include 15% VAT as required by Bangladesh law.

> **Note:** Optional activities and personal expenses are not included.
    `,
  },
  {
    slug: 'vat-explained',
    title: 'Understanding VAT on bookings',
    category: 'Payments',
    description: 'VAT information for travelers.',
    content: `
## VAT on Bookings

Transparent pricing.

### What is VAT?

Value Added Tax - a consumption tax required by Bangladesh law.

### How It Works

- 15% VAT included in all prices
- Shown separately in booking summary
- Required by law

### Why

- Supports local economy
- Legal requirement
- Transparent pricing

> **Note:** VAT cannot be refunded separately.
    `,
  },
  {
    slug: 'payment-issues',
    title: 'Payment not going through',
    category: 'Payments',
    description: 'Troubleshooting payment problems.',
    content: `
## Payment Issues

We can help.

### Common Solutions

1. Check internet connection
2. Verify payment details
3. Try different payment method
4. Clear app cache

### Still Having Issues?

Contact us with:
- Error message (if any)
- Screenshot of issue
- Last 4 digits of payment method

> **Note:** Don't retry payment multiple times - contact us first.
    `,
  },
  {
    slug: 'cancel-booking',
    title: 'How to cancel a booking',
    category: 'Cancellations & Refunds',
    description: 'Steps to cancel your tour.',
    content: `
## Cancel Your Booking

How to cancel properly.

### Steps

1. Go to "My Bookings"
2. Select the booking
3. Click "Cancel Booking"
4. Confirm cancellation

### Refund Timeline

| When | Refund |
|------|--------|
| 7+ days | 100% |
| 3-6 days | 50% |
| < 48 hours | None |

> **Note:** Cancellation requests must be made through the app.
    `,
  },
  {
    slug: 'date-change',
    title: 'Requesting a date change',
    category: 'Cancellations & Refunds',
    description: 'How to change your tour date.',
    content: `
## Change Your Date

Flexibility when you need it.

### Free Changes

- 5+ days before original date
- Subject to availability

### Fee-Based Changes

- Within 5 days: ৳500 fee
- Price difference may apply

### How to Request

1. Contact us
2. Provide new date preference
3. We'll check availability

> **Note:** Date changes are subject to availability.
    `,
  },
  {
    slug: 'tour-cancelled',
    title: 'What if the tour is cancelled by you?',
    category: 'Cancellations & Refunds',
    description: 'Understanding cancellation scenarios.',
    content: `
## Tour Cancellation by Us

What happens if we cancel.

### Reasons We May Cancel

- Insufficient participants
- Weather conditions
- Safety concerns
- Guide unavailability

### Your Options

1. Full refund
2. Reschedule to another date
3. Credit for future booking

### We'll Notify You

- At least 48 hours in advance
- Via email and phone

> **Note:** We never cancel without providing alternatives.
    `,
  },
  {
    slug: 'medical-refund',
    title: 'Refunds for medical emergencies',
    category: 'Cancellations & Refunds',
    description: 'Special refund consideration for medical issues.',
    content: `
## Medical Emergency Refunds

We understand life happens.

### Policy

- Full refund with medical certificate
- Case-by-case review
- Contact us immediately

### Required

- Medical certificate
- Dated within tour dates
- Submitted within 14 days

### Process

1. Contact us
2. Provide documentation
3. We'll process within 5-7 days

> **Note:** We review each case individually with compassion.
    `,
  },
  {
    slug: 'meeting-your-guide',
    title: 'Meeting your guide',
    category: 'During the Tour',
    description: 'How to find and recognize your guide.',
    content: `
## Your Tour Guide

Who will be with you.

### Before the Tour

- Guide name sent 24 hours before
- Phone number provided
- Pickup location confirmed

### At the Meeting Point

- Look for GoShareBD sign
- Guide will have group list
- They'll introduce themselves

### During Tour

- Follow guide's instructions
- Ask questions
- Share feedback

> **Note:** Guides are trained in first aid and safety.
    `,
  },
  {
    slug: 'missed-departure',
    title: 'What happens if I miss departure?',
    category: 'During the Tour',
    description: 'What to do if you miss your tour.',
    content: `
## Missed Departure

Don't panic - here's what to do.

### If You're Running Late

1. Call the guide immediately
2. Provide your location
3. We'll try to wait (max 15 min)

### If You Miss the Tour

- No refund for no-shows
- Contact us for rebooking
- May be able to join next day (subject to availability)

> **Note:** Be on time! Pickup times are strict.
    `,
  },
  {
    slug: 'day-of-changes',
    title: 'Itinerary changes on the day',
    category: 'During the Tour',
    description: 'Flexibility during your tour.',
    content: `
## Day-of Changes

Sometimes plans need to change.

### Possible Changes

- Weather adjustments
- Road conditions
- Group pace
- Activity modifications

### Our Approach

- Safety first always
- Similar alternatives
- Guide has final authority

### Your Options

- Accept changes
- Request alternatives
- Contact our support

> **Note:** Guide decisions are final for safety reasons.
    `,
  },
  {
    slug: 'contact-during-tour',
    title: 'Contacting us during the tour',
    category: 'During the Tour',
    description: 'How to reach us while on tour.',
    content: `
## During Your Tour

We're here to help.

### Contact Methods

1. **Guide** - Your first point of contact
2. **Phone** - 24/7 hotline
3. **WhatsApp** - Quick messaging

### Guide's Role

- Day-to-day coordination
- Emergency handling
- Local knowledge

### Emergency

- Guide has emergency contacts
- Nearest hospitals identified
- We'll assist immediately

> **Note:** Save the guide's number before tour day.
    `,
  },
  {
    slug: 'safety-standards',
    title: 'Our safety standards',
    category: 'Safety',
    description: 'How we keep you safe.',
    content: `
## Safety First

Your wellbeing is our priority.

### Our Standards

- Verified guides with background checks
- First aid trained and equipped
- Regular safety audits
- Emergency protocols

### Pre-Tour

- Weather monitoring
- Route assessment
- Equipment checks

### During Tour

- Group size limits
- Regular check-ins
- Emergency contacts

> **Note:** We would rather cancel than compromise safety.
    `,
  },
  {
    slug: 'emergency-contacts',
    title: 'Emergency contacts',
    category: 'Safety',
    description: 'Important numbers to save.',
    content: `
## Emergency Numbers

Save these before you travel.

### Our Contact

- 24/7 Hotline: +880 1XXX-XXXXXX

### Bangladesh Emergency

- Police: 999
- Fire: 199
- Ambulance: 16000
- Tourist Police: 01769-691604

### Nearest Hospital

- Your guide knows local hospitals
- Identified before each tour

> **Note:** Save these offline - coverage can be limited in remote areas.
    `,
  },
  {
    slug: 'report-concern',
    title: 'Reporting a safety concern',
    category: 'Safety',
    description: 'How to report any safety issues.',
    content: `
## Report Concerns

We take all concerns seriously.

### What to Report

- Guide behavior
- Safety conditions
- Equipment issues
- Anything that worries you

### How to Report

1. Tell your guide first
2. Contact our hotline
3. Email: safety@gosharebd.com

### What Happens

- We investigate immediately
- Take appropriate action
- Follow up with you

> **Note:** You can report anonymously if preferred.
    `,
  },
  {
    slug: 'update-profile',
    title: 'Updating your profile',
    category: 'Account & Profile',
    description: 'How to update your account information.',
    content: `
## Update Your Profile

Keep your information current.

### What You Can Update

- Name
- Email
- Phone number
- Profile picture

### How

1. Go to Profile
2. Click Edit
3. Make changes
4. Save

### Important

- Ensure email is current for confirmations
- Phone number for tour updates

> **Note:** ID details cannot be changed after booking.
    `,
  },
  {
    slug: 'change-email',
    title: 'Changing your email address',
    category: 'Account & Profile',
    description: 'How to update your email.',
    content: `
## Change Email

Update your contact details.

### Process

1. Go to Profile Settings
2. Enter new email
3. Verify new email
4. Old email becomes inactive

### What Happens

- Confirmation goes to new email
- Old login no longer works
- Booking history preserved

> **Note:** Contact support if you lost access to both emails.
    `,
  },
  {
    slug: 'booking-history',
    title: 'Viewing your booking history',
    category: 'Account & Profile',
    description: 'Access your past bookings.',
    content: `
## Your Bookings

All your tours in one place.

### Where to Find

- "My Bookings" section
- App and website
- Sorted by date

### What's Included

- Past tours
- Upcoming tours
- Cancelled bookings

### Details Available

- Confirmation number
- Itinerary
- Payment status

> **Note:** Keep bookings for warranty and reference.
    `,
  },
  {
    slug: 'delete-account',
    title: 'Deleting your account',
    category: 'Account & Profile',
    description: 'How to permanently delete your account.',
    content: `
## Delete Account

We hate to see you go.

### What Happens

- Profile removed
- Booking history deleted
- Cannot be undone

### How to Request

1. Contact support
2. Confirm your identity
3. Account deleted within 30 days

### Data Retention

- Some data kept for legal requirements
- Financial records (as required by law)

> **Note:** You can download your data before deleting.
    `,
  },
  {
    slug: 'leave-review',
    title: 'How to leave a review',
    category: 'Reviews',
    description: 'Share your experience.',
    content: `
## Leave a Review

Help other travelers.

### When

- After your tour completes
- Within 14 days

### How

1. Go to "My Bookings"
2. Find completed tour
3. Click "Leave Review"
4. Rate and comment

### What to Include

- Guide quality
- Tour experience
- Tips for others

> **Note:** Reviews help us improve and help others decide.
    `,
  },
  {
    slug: 'edit-review',
    title: 'Editing or deleting a review',
    category: 'Reviews',
    description: 'Managing your reviews.',
    content: `
## Manage Reviews

You have options.

### Edit Review

- Within 7 days of posting
- Click "Edit" on your review
- Changes apply immediately

### Delete Review

- Contact support
- Must have valid reason
- We may ask for verification

### Guidelines

- Be honest
- Be respectful
- Be helpful

> **Note:** We may remove reviews that violate guidelines.
    `,
  },
  {
    slug: 'review-guidelines',
    title: 'Our review guidelines',
    category: 'Reviews',
    description: 'What we expect from reviews.',
    content: `
## Review Guidelines

Keeping reviews helpful.

### What We Welcome

- Honest opinions
- Specific feedback
- Tips for future travelers

### What We Don't Allow

- Profanity
- Personal attacks
- False information
- Promotional content

### Our Process

- Reviews screened for appropriateness
- Authentic reviews only
- No fake positive reviews

> **Note:** Violations may result in review removal and account suspension.
    `,
  },
];

export function getArticleBySlug(slug: string): HelpArticle | undefined {
  return HELP_ARTICLES.find((article) => article.slug === slug);
}

export function getAllArticles(): HelpArticle[] {
  return HELP_ARTICLES;
}

export function getArticlesByCategory(category: string): HelpArticle[] {
  return HELP_ARTICLES.filter((article) => article.category === category);
}
