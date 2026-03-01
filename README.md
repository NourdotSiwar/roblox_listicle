# WEB103 Project 2 - *Roblox Listicle Part 2*

Submitted by: **Nour Siwar**

About this web app: **New Version of Roblox Listicle: Instead of pulling data from a js file, Roblox Listicle pulls game data from a database!**

Time spent: **3** hours

## Required Features

The following **required** functionality is completed:

<!-- Make sure to check off completed functionality below -->
- [X] **The web app uses only HTML, CSS, and JavaScript without a frontend framework**
- [X] **The web app is connected to a PostgreSQL database, with an appropriately structured database table for the list items**
  - [X] **NOTE: Your walkthrough added to the README must include a view of your Render dashboard demonstrating that your Postgres database is available**
  - [X]  **NOTE: Your walkthrough added to the README must include a demonstration of your table contents. Use the psql command 'SELECT * FROM tablename;' to display your table contents.**

The following **optional** features are implemented:

- [X] The user can search for items by a specific attribute

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='roblox_listicle_project2.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with ...  LiceCap

## Notes

Two challenges encountered:
- Figuring out why the data did not load correctly where some fields showed as "undefined". Turns out postgre names its fields without camelcase. Example: gameName is turned into gamename.
- Figuring out the stretch feature. I ran into some errors with frontend form and results stacking on top of each other.

## License

Copyright [2026] [Nour Siwar]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.