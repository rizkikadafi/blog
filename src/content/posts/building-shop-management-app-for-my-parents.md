---
title: "Building a Shop Management App for My Parents' Store"
description: "Why I'm building a simple, offline-first shop management app for my parents' retail store — and what changes when the people using your software don't consider themselves tech-savvy."
date: 2026-10-14
author: "Rizki Kadafi"
categories:
  - projects
tags:
  - shop-management
  - side-project
  - offline-first
  - refine-core
  - react
  - supabase
is_series: false
thumbnail: shop-management-cover.jpeg
---

My parents run a small retail shop. It sells staple foods and daily necessities — flour, cooking oil,
sugar, eggs, instant noodles, soap, and the long list of things a household needs from one week to
the next. It is the kind of shop where the same customers come back, buy a little at a time, and
occasionally ask to put something on a tab.

For a while now I've been helping them run it. Somewhere between restocking the shelves and writing
prices on scraps of paper, I started to notice how much of the shop quietly runs on memory and
paper. That observation is what turned into a project: an application to help manage the shop. Not
because I wanted to build software for its own sake, but because I kept watching small, avoidable
problems happen over and over.

---

## The quiet cost of doing things manually

When you work in the shop every day, the manual way of doing things doesn't feel broken. It feels
normal. You know roughly what's on the shelf. You remember what you paid for the last carton. You
write today's sales in a notebook and move on.

But a few things get harder than they should be:

- **Keeping records is unreliable.** Sales and prices live across notebooks, loose notes, and memory.
  When you need to check what happened last week, or whether a number was written down correctly,
  there is often no clean answer.
- **Inventories are guesswork.** Knowing what is actually running low means walking the shelves and
  relying on a feel for it. It works — until it doesn't, and something runs out in the middle of a
  busy day.
- **Nothing is searchable.** A notebook can tell you that you sold something. It can't easily tell
  you how much of a product you moved this month, or which items are consistently worth restocking.

None of these are dramatic failures. They're the slow kind: a little extra time here, a small mistake
there. But they add up, and they're exactly the kind of thing software is good at absorbing.

## Why not just use an existing app?

The obvious question is: there are already plenty of point-of-sale and inventory apps. Why build
another one?

The honest answer is that most of them are designed for someone who isn't my parents. They assume a
level of comfort with technology that my parents simply don't have — and that's not a criticism of
them. They've spent decades running a shop successfully without any of this. The tools expect the
user to adapt to the software; I needed the opposite.

<figure>
  <img src="/blog/assets/images/posts/price-recording-1.jpeg" alt="price recording 1" />
  <figcaption>price recording in paper</figcaption>
</figure>

<figure>
  <img src="/blog/assets/images/posts/price-recording-2.jpeg" alt="price recording 2" />
  <figcaption>price recording in book</figcaption>
</figure>

<figure>
  <img src="/blog/assets/images/posts/out-of-stock-recording.jpeg" alt="out of stock recording" />
  <figcaption>out of stock items recording in book</figcaption>
</figure>

This is the part I keep coming back to. My parents are **not tech-savvy**, and any application that
ignores that fact is going to fail in the real world, no matter how clean its code is. A screen that
feels obvious to me can feel like a maze to someone who has never used an inventory system. Small
frictions — a confusing form, an unexpected error, an English label — are enough to send the whole
thing back to the notebook.

## The constraint that shapes everything

So I set one rule for myself early on: **the app should fit their existing workflow, not replace
it.** If my parents already do something a certain way by hand, the app should mirror that step
rather than invent a "better" one and ask them to relearn their job.

In practice, that constraint pushes the design in a very specific direction:

- **Familiar steps, in a familiar order.** The flow through the app should feel like the flow they
  already follow, just recorded automatically as they go.
- **Big, clear, uncluttered screens.** Fewer choices per screen, obvious labels, and nothing hidden
  behind jargon. If they can't guess what a button does, it's the wrong button.
- **Their language.** The interface speaks Indonesian, because that's the language of the shop, not
  English.

## It has to work when the internet doesn't

One part of that workflow deserves its own section, because it isn't really about the interface — it's
about the situation the shop is actually in. **My parents aren't always connected, and even when they
are, the connection can drop without warning.**

That sounds like a minor detail until you think about what it means for a tool they're supposed to
rely on. A shopkeeper doesn't stop working when the Wi-Fi does. Someone walks in and asks the price of
something, and my parents need that answer *now* — not after a loading spinner gives up. A price
changes on a supplier's slip, and it needs to be written down at that moment, not whenever the network
decides to cooperate.

So the app is **offline-first**. The data it needs — the product list, the prices, the values last
recorded — lives on the device itself, not only on a server somewhere across the internet. When the
app opens, it reads from that local copy, so it stays fast and available whether or not there's a
signal. The specific things my parents will reach for most often have to keep working with no
connection at all:

- **Checking the price** of a product before quoting it to a customer.
- **Recording a price** or a correction the moment they notice it.
- **Adding or editing a product**, so a new item isn't blocked until the internet comes back.

The network is treated as something that comes and goes. Changes made offline are stored safely and
sent to the server automatically once the connection returns — and the app shows whether each change
is still pending or already synced, so there's no guessing about what has and hasn't been saved.

This isn't only a technical preference. If a tool stops working the moment the connection wavers, it
becomes one more thing for my parents to distrust — and once they don't trust it, they'll go back to
the notebook, and no amount of features will bring them back. Offline-first is, in a very practical
sense, a trust feature.

## What I've built so far

I've started with the foundation: **product management**. Before you can track what's sold or what's
left, you need a reliable picture of what the shop actually sells.

That module covers:

- **Products and categories**, so the catalogue reflects the way the shop is organized.
- **Units of measure and conversions.** This one matters more than it sounds. Shops like ours think
  in mixed units — a carton, a pack, an individual piece — and the same product can be bought by the
  box and sold by the piece. The app models those relationships so prices and quantities stay
  consistent across units.
- **Selling prices and purchase prices**, recorded per unit, so it's possible to see both what the
  shop pays and what it charges.

<!-- IMAGE PLACEHOLDER: screenshot of the product management screen (product list / create form). -->

<figure>
  <img src="/blog/assets/images/posts/shop-management-list-product.png" alt="product list" />
  <figcaption>shop management product list</figcaption>
</figure>

<figure>
  <img src="/blog/assets/images/posts/shop-management-category.png" alt="product category" />
  <figcaption>shop management product category</figcaption>
</figure>

<figure>
  <img src="/blog/assets/images/posts/shop-management-uom.png" alt="product uom" />
  <figcaption>shop management product uom</figcaption>
</figure>

<figure>
  <img src="/blog/assets/images/posts/shop-management-price-information.png" alt="price information" />
  <figcaption>shop management product price list</figcaption>
</figure>

Technically, it's a web app built with Refine core (React) on the front end and Supabase (Postgres, authentication,
and row-level security) as the backend, with local storage on the device so it keeps working offline
and syncs when it can. I've deliberately kept the stack modest — the interesting problem here isn't
the technology, it's whether the thing is actually usable by the people it's for.

## What I've learned so far

A few things have already stuck with me:

- **"Not tech-savvy" is a design brief, not a limitation.** It forces clarity. Every unnecessary
  field, every ambiguous label, every extra tap is a place where a real user gets lost. Designing for
  my parents has made me a much more careful designer than designing for myself ever did.
- **Watching the real workflow beats imagining it.** The way I assumed the shop operated and the way
  it actually operates are not always the same. The details live in the daily routine, not in a
  requirements doc.
- **My job is partly translation.** Between the shop's world — cartons, tabs, seasonal demand,
  "the usual" — and the tidy abstractions of a database, there's a lot of meaning to preserve.

## What's next

Product management is the groundwork. The parts that will matter most to my parents are still ahead:
recording sales, tracking stock as it moves, and gradually letting the notebook retire. I'm in no
rush to bolt on every feature at once — the goal was never a complete system, it was one that my
parents will actually open every day.

If there's a single idea I'd want to remember from this project, it's that the hardest part of
building software for people isn't the software. It's the listening.
