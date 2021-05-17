# Update google-libphonenumber

### **Problem:**

User couldn't log in as they were told they had no account. User then couldn't sign up because their phone number was not accepted. Error returned- "Please enter a valid phone number"

**Issue**: Number not supported by phone util helpers (**google-libphonenumber v3.0.12**).

**In-App Replicate**: In input phone number, input the user's phone number and click next.

**Solution**: Upgrade the current version of google-libphonenumber to latest version (**currently 3.2.21**)

<br>

To further investigate:

1. Clone the repo
2. Check that ur using `npm v10.15.3`
3. Add the invalid number in `invalidPhone` like `+61xxxxxxxxx`
4. To check the result of the current the app is using (v3.0.12), do `npm run current`
5. To check the result of if we update to latest version (v3.2.21), do `npm run latest`

You can also investigate other phone numbers by changing the `invalidPhone`
