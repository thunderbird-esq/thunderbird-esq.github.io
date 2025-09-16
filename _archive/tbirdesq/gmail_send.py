import os.path
import pickle
import base64
from email.mime.text import MIMEText

from google.auth.transport.requests import Request
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build

# Scope to send emails
SCOPES = ['https://www.googleapis.com/auth/gmail.send']

def gmail_authenticate():
    creds = None
    if os.path.exists('token.json'):
        with open('token.json', 'rb') as token:
            creds = pickle.load(token)
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(
                'client_secret.json', SCOPES)
            creds = flow.run_local_server(port=8080)
        with open('token.json', 'wb') as token:
            pickle.dump(creds, token)
    return build('gmail', 'v1', credentials=creds)

def create_message(sender, to, subject, message_text):
    message = MIMEText(message_text)
    message['to'] = to
    message['from'] = sender
    message['subject'] = subject
    raw = base64.urlsafe_b64encode(message.as_bytes()).decode()
    return {'raw': raw}

def send_email(service, sender, to, subject, body):
    message = create_message(sender, to, subject, body)
    sent_msg = service.users().messages().send(userId="me", body=message).execute()
    print(f"✅ Email sent to {to}! Message ID: {sent_msg['id']}")

# ---- Run this when you want to send a test email ----
if __name__ == '__main__':
    service = gmail_authenticate()
    send_email(
        service,
        sender='thunderbirdesquire@gmail.com',        # <- replace this with your Gmail
        to='christenrhoadarmer18@gmail.com',           # <- replace with who you're emailing
        subject='✅ Gmail API Test',
        body='Hello from your friendly Nova Mode script!'
    )
