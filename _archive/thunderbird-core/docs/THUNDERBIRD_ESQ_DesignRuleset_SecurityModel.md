# THUNDERBIRD.ESQ – Security & Moderation Model

---

## 🛡️ Security Philosophy

> The construct must be open, but guarded.  
> Users may enter freely, but bad faith cannot persist.  
> The system will remember **just enough** to protect itself.

---

## 🔐 Identity & Authentication

### Registration Flow

- User chooses a **username** and **password**
- Password is hashed using `SHA-256` client-side
- Only the **hashed password** is stored (in `localStorage` or a secure cookie)

### Login Flow

- User enters username and password
- Client re-hashes input and compares to stored value
- If matched, session token is unlocked
- No passwords are stored or transmitted in plaintext—**ever**

---

## 🧩 Data Stored per User

| Data Type         | Where Stored          | Purpose                            |
|-------------------|------------------------|-------------------------------------|
| `username`        | localStorage           | Display and login                  |
| `passwordHash`    | localStorage           | Auth for BBS/Chat                  |
| `sessionToken`    | sessionStorage / cookie| Active session unlock              |
| `ipAddress`       | server logs only       | Abuse prevention / moderation      |

- The system **does not collect**:
  - Email addresses
  - Full names
  - Behavioral metrics
  - Background activity
- Users remain **pseudonymous** unless they choose otherwise

---

## 🧭 User Identifiability

- Users display chosen usernames in BBS and Chat
- No account metadata is publicly visible
- Optional: Users may toggle "Public Key" visibility for file transfers (future)
- **IP address is only visible to system moderators**

---

## 🧱 Passive Security

- All files are scanned for dangerous content client-side before sharing
- Only known-safe file types are accepted (`.tbesq`, `.png`, `.txt`)
- No executable scripts allowed in uploads or messages
- Message inputs are auto-sanitized (no JS injection or markup)

---

## 🧰 Moderation Tools

- Moderators access:
  - IP flags
  - Abuse reports
  - Chat logs (if flagged)
  - File transfer logs (if flagged)
- Moderators may:
  - Mute users from Chat
  - Suspend posting to BBS
  - Flag accounts for manual review
  - Ban IP addresses (auto and manual)

### Moderation Workflow

- Users report content via dropdown flag
- Flagged items enter review queue
- Mods receive email + UI alert
- Infractions tracked per `username` and `ipAddress`

---

## 🔐 Future Considerations

- Optional peer-verification model (web-of-trust)
- Decentralized moderation via BBS votes (experimental)
- Anonymous sharing toggle with expiration timer

---

## 🧠 Security Model Summary

- **Zero plaintext passwords**
- **Client-side cryptographic auth only**
- **Minimal server retention**
- **No monetization, tracking, or user profiling**

This is **a system for free humans, not data points.**

---
