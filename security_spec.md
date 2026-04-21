# Phase 0: Payload-First Security TDD

## Data Invariants
1. A post can only be created, updated, or deleted by an authenticated user who has an active `isAdmin: true` record in the `userRoles` collection.
2. The `userRoles` collection can only be populated manually by system administrators. Modifying your own userRole is strictly forbidden.
3. Every post must have a valid title, slug, and content.
4. Timestamps (`createdAt`, `updatedAt`) must strictly match `request.time` during creation and updates.
5. All public queries to posts are allowed, given the public nature of a blog.

## The "Dirty Dozen" Payloads
1. Unauthenticated Create: A guest tries to create a post.
2. Normal User Create: A registered user (without admin role) tries to create a post.
3. Over-privileged Update: An admin tries to update a post but injects a `isVerified: true` non-existent field.
4. Timestamp Spoofing: An admin creating a post with `createdAt` set to yesterday.
5. Missing Required Fields: Creating a post without a `slug`.
6. Invalid ID format: Creating a post using a 1000-character malicious ID.
7. Role Escalation: A normal user attempts to create a document in `/userRoles/{myId}` setting `isAdmin: true`.
8. Delete Escalation: A normal user tries to delete a post.
9. Array Exploitation (N/A here since no arrays, but tested conceptually).
10. Immutable Field Modification: Modifying `createdAt` during a post update.
11. Update Gap: Providing a string for `readTime` but empty content.
12. Denial of Wallet: Injecting 2MB string into title.

## The Test Runner
A complete `firestore.rules.test.ts` file verification strategy will ensure all these return `PERMISSION_DENIED`.
