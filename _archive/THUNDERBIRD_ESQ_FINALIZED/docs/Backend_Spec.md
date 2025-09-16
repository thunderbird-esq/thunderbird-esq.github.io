# Backend Specification – THUNDERBIRD.ESQ

## No Traditional Server
Everything runs client-side, except:
- Supabase backend (optional BBS/chat)

## File Handling
- Save: .tbesq file formats
- Store: IndexedDB
- Export: Blob download link

## User Sessions
- Anonymous, pseudonym hashes
- Session token: Local only
- No persistent cookies except optional sessionToken

## Moderation
- Supabase-based moderation table for BBS
- Rate limit abusive posters by IP hash
