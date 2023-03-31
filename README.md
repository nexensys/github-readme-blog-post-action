# Github Readme Blog Post Action

A (somewhat) simple github action that generates a set of cards for recent blog posts.

Here's an example of how it looks given the URLs for DEV Community, JavaScript Weekly, and Echo JS:

<!-- post-list:start -->
## DEV Community

The most recent home feed on DEV Community.

[Read more](https://dev.to)
> Last updated: Friday, March 31, 2023 at 12:11:28 AM

> Showing 5 of 12 posts.

[![My Favorite Coursera Courses for Blockchain Developers](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community/My_Favorite_Coursera_Courses_for_Blockchain_Developers.svg)](https://dev.to/javinpaul/my-favorite-coursera-courses-for-blockchain-developers-71l)
[![Getting Started with Blogging: A Beginners Guide](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community/Getting_Started_with_Blogging__A_Beginners_Guide.svg)](https://dev.to/arindam_1729/getting-started-with-blogging-a-beginners-guide-41d0)
[![What is Kubernetes ?: The Future of Cloud-Native Application Development.](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community/What_is_Kubernetes____The_Future_of_Cloud-Native_Application_Development..svg)](https://dev.to/inibambam/what-is-kubernetes-the-future-of-cloud-native-application-development-1mfl)
[![How to Disable Highly Privileged Azure AD Users with Azure Logic Apps and Microsoft Graph API](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community/How_to_Disable_Highly_Privileged_Azure_AD_Users_with_Azure_Logic_Apps_and_Microsoft_Graph_API.svg)](https://dev.to/bbbrian/how-to-disable-azure-ad-users-with-azure-logic-apps-and-microsoft-graph-api-48kl)
[![Two trie implementations in Rust (one's super fast)](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community/Two_trie_implementations_in_Rust_(one's_super_fast).svg)](https://dev.to/timclicks/two-trie-implementations-in-rust-ones-super-fast-2f3m)


## JavaScript Weekly

A newsletter of JavaScript articles, news and cool projects

[Read more](https://javascriptweekly.com/)
> Last updated: Friday, March 31, 2023 at 12:11:31 AM

> Showing 4 of 4 posts.

[![Playwright now offers a UI mode](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/JavaScript_Weekly/Playwright_now_offers_a_UI_mode.svg)](https://javascriptweekly.com/issues/631)
[![Transformers: JavaScript in Disguise](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/JavaScript_Weekly/Transformers__JavaScript_in_Disguise.svg)](https://javascriptweekly.com/issues/630)
[![New JavaScript features of the past few years](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/JavaScript_Weekly/New_JavaScript_features_of_the_past_few_years.svg)](https://javascriptweekly.com/issues/629)
[![Garbage collector experiments](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/JavaScript_Weekly/Garbage_collector_experiments.svg)](https://javascriptweekly.com/issues/628)


## Echo JS

Description pending

[Read more](
http://www.echojs.com
)
> Last updated: Friday, March 31, 2023 at 12:11:34 AM

> Showing 5 of 30 posts.

[![Spam-tastic! npm Registry Swamped by Bizarre John Wick Frenzy - Socket](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/Spam-tastic!_npm_Registry_Swamped_by_Bizarre_John_Wick_Frenzy_-_Socket.svg)](https://socket.dev/blog/npm-registry-spam-john-wick)
[![File Uploads for the Web (3): File Uploads in Node & Nuxt](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/File_Uploads_for_the_Web_(3)__File_Uploads_in_Node___Nuxt.svg)](https://austingil.com/file-uploads-in-node/)
[![A Comprehensive Guide to Using Context and State in Your App](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/A_Comprehensive_Guide_to_Using_Context_and_State_in_Your_App.svg)](https://dskcode.com/a-comprehensive-guide-to-using-context-and-state-in-your-app)
[![We're Working on Cassandra Support for Mongoose](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/We're_Working_on_Cassandra_Support_for_Mongoose.svg)](http://www.thecodebarbarian.com/were-working-on-cassandra-support-for-mongoose)
[![
An Introduction to Pinia: The Alternative State Management Library for Vue.js Applications
](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/_An_Introduction_to_Pinia__The_Alternative_State_Management_Library_for_Vue.js_Applications_.svg)](
https://goo.su/bi70g
)


<!-- post-list:end -->

# Quick Start

This action runs out-of-the-box, with only one provided input.

Create a `.yml` file with the desired filename, and paste the following:

```yml
on:
  push:
  schedule:
    - cron: "0 */6 * * *"
jobs:
  blog:
    runs-on: ubuntu-latest
    name: Fetch and Generate Blog Posts
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      - name: Generate
        uses: ErrorGamer2000/github-readme-blog-post-action@v1
        with:
          feed_urls: FEEDS
      - name: Commit changed files
        uses: stefanzweifel/git-auto-commit-action@v4
        with:
          commit_message: Save Generated Blog Posts
          skip_checkout: true
```

Replace the FEEDS with a comma-seperated list of [RSS feed](https://rss.com/blog/how-do-rss-feeds-work/) URLs, add

```md
<!-- blog-post-list:start -->
<!-- blog-post-list:end -->
```

in the README where you want the list, and **_BAM!_** You have yourself an automatic action that runs every 6 hours and when you change any of the files in your readme!

# Inputs

<table>
  <thead>
    <tr>
      <th>Option Name</th>
      <th>Type</th>
      <th>Default Value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>feed_urls</code></td>
      <td><code>string</code></td>
      <td><code>""</code></td>
      <td>A (comma-seperated) list of RSS feed URLs to load posts from. This is the only required input.</td>
    </tr>
    <tr>
      <td><code>max_posts_per_url</code></td>
      <td><code>number</code></td>
      <td><code>5</code></td>
      <td>The maximum number of posts to show for each feed. If the number of posts is less than this, then all of the posts will be shown.</td>
    </tr>
    <tr>
      <td><code>position_indicator</code></td>
      <td><code>string</code></td>
      <td><code>blog-post-list</code></td>
      <td>The text of the comments that the action uses to inject the images into the README file. Everything between the two comments in the form <code>&lt;!-- position_indicator:start --&gt;</code> and <code>&lt;!-- position_indicator:end --&gt;</code> is replaced. Changing this can allow you to use multiple configurations for different feeds by using different markers for each.</td>
    </tr>
    <tr>
      <td><code>show_feed_data</code></td>
      <td><code>boolean</code></td>
      <td><code>true</code></td>
      <td>Whether or not to show the generated markdown describing the feed, which includes the title of the feed, the description of the feed, the <code>Read More</code> link, the last updated date, and the post count. Each of these can also be individually toggled with the following options. This will override any of the specific options, so it is better to disable/enable them specifically if you want to remove some elements.</td>
    </tr>
    <tr>
      <td><code>show_feed_title</code></td>
      <td><code>boolean</code></td>
      <td><code>true</code></td>
      <td>Whether or not to show the header containing the title of the feed. This will be formatted as an <code>h2</code> header. An option to customize this header will be in a future update.</td>
    </tr>
    <tr>
      <td><code>show_feed_description</code></td>
      <td><code>boolean</code></td>
      <td><code>true</code></td>
      <td>Whether or not to show the title of the feed that is provided by the RSS feed.</td>
    </tr>
    <tr>
      <td><code>show_read_more</code></td>
      <td><code>boolean</code></td>
      <td><code>true</code></td>
      <td>Whether or not to show the <code>Read More</code> link under the feed description.</td>
    </tr>
    <tr>
      <td><code>show_last_updated_date</code></td>
      <td><code>boolean</code></td>
      <td><code>true</code></td>
      <td>Whether or not to show the date and time of the last update of the list.</td>
    </tr>
    <tr>
      <td><code>show_post_count</code></td>
      <td><code>boolean</code></td>
      <td><code>true</code></td>
      <td>Whether or not to show the number of posts shown and the total number of posts provided by the RSS feed.</td>
    </tr>
    <tr>
      <td><code>show_post_date</code></td>
      <td><code>boolean</code></td>
      <td><code>true</code></td>
      <td>Whether or not to show the date of each post on the card.</td>
    </tr>
    <tr>
      <td><code>locale</code></td>
      <td><code>string</code></td>
      <td><code>"en"</code></td>
      <td>The locale of the project. This is used <strong>purely</strong> for formatting the dates of the cards and last update.</td>
    </tr>
    <tr>
      <td><code>time_zone</code></td>
      <td><code>string</code></td>
      <td><code>"UTC"</code></td>
      <td>A valid time zone to use for the last updated date.</td>
    </tr>
    <tr>
      <td><code>output_dir</code></td>
      <td><code>string</code></td>
      <td><code>"blog-post-list-output"</code></td>
      <td>The directory to store the post card images in. Must be in the root directory (i.e. no path separators <code>/</code> or <code>\</code>) and cannot include the characters <code>/\?%*:|"&lt;&gt;</code>.</td>
    </tr>
<!--
    <tr>
      <td><code></code></td>
      <td><cde></cde></td>
      <td><code></code></td>
      <td></td>
    </tr>
-->
  </tbody>
</table>

# Usage Notes

- Make sure that you use an action that will commit changed files to the repository after this action has run, so that the files actually get changed.
- I am a solo dev, and will get back to you as soon as I can, so expect to wait several weeks depending on how many other issues there are.
- Enjoy and share! 🤗
