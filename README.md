# Github Readme Blog Post Action

A (somewhat) simple github action that generates a set of cards for recent blog posts.

Here's an example of how it looks given the URLs for DEV Community, JavaScript Weekly, and Echo JS:

<!-- post-list:start -->
## DEV Community 👩‍💻👨‍💻

The most recent home feed on DEV Community 👩‍💻👨‍💻.

[Read more](https://dev.to)
> Last updated: Thursday, December 8, 2022 at 11:12:11 PM

> Showing 5 of 12 posts.

[![APIs: The Revolutionary Interfaces](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community_👩‍💻👨‍💻/APIs__The_Revolutionary_Interfaces.svg)](https://dev.to/mwendwabundi/apis-the-revolutionary-interfaces-5853)
[![Rsyslog Servisi ile Uzak Sunucuya log Yazdırma](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community_👩‍💻👨‍💻/Rsyslog_Servisi_ile_Uzak_Sunucuya_log_Yazdırma.svg)](https://dev.to/aciklab/rsyslog-servisi-ile-uzak-sunucuya-log-yazdirma-3i3n)
[![Top 13 Reasons Why Your Test Automation Fails | Automation Testing Tutorial | Automation Tester](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community_👩‍💻👨‍💻/Top_13_Reasons_Why_Your_Test_Automation_Fails___Automation_Testing_Tutorial___Automation_Tester.svg)](https://dev.to/promode/top-13-reasons-why-your-test-automation-fails-automation-testing-tutorial-automation-tester-3l2a)
[![6 Best Front-end Frameworks to Use For Web Development](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community_👩‍💻👨‍💻/6_Best_Front-end_Frameworks_to_Use_For_Web_Development.svg)](https://dev.to/function12_io/6-best-front-end-frameworks-to-use-for-web-development-2flk)
[![Developer productivity hacks 11](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community_👩‍💻👨‍💻/Developer_productivity_hacks_11.svg)](https://dev.to/function12_io/developer-productivity-hacks-11-58p3)


## JavaScript Weekly

A newsletter of JavaScript articles, news and cool projects

[Read more](https://javascriptweekly.com/)
> Last updated: Thursday, December 8, 2022 at 11:12:14 PM

> Showing 4 of 4 posts.

[![Splitting up sentences with Intl.Segmenter](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/JavaScript_Weekly/Splitting_up_sentences_with_Intl.Segmenter.svg)](https://javascriptweekly.com/issues/617)
[![JavaScript Vocoder Puccini](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/JavaScript_Weekly/JavaScript_Vocoder_Puccini.svg)](https://javascriptweekly.com/issues/616)
[![Nuxt 3.0, TypeScript 4.9, Angular 15..](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/JavaScript_Weekly/Nuxt_3.0__TypeScript_4.9__Angular_15...svg)](https://javascriptweekly.com/issues/615)
[![Rome wasn't rewritten in a day](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/JavaScript_Weekly/Rome_wasn't_rewritten_in_a_day.svg)](https://javascriptweekly.com/issues/614)


## Echo JS

Description pending

[Read more](
http://www.echojs.com
)
> Last updated: Thursday, December 8, 2022 at 11:12:16 PM

> Showing 5 of 30 posts.

[![Five Challenges to Building an Isomorphic JavaScript Library](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/Five_Challenges_to_Building_an_Isomorphic_JavaScript_Library.svg)](https://doordash.engineering/2022/12/06/five-challenges-to-building-an-isomorphic-javascript-library/)
[![Build smaller, faster, and more secure desktop applications with a web frontend | Tauri Apps](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/Build_smaller__faster__and_more_secure_desktop_applications_with_a_web_frontend___Tauri_Apps.svg)](https://tauri.app)
[![Electron Chat App Tutorial: Building a Desktop Chat App](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/Electron_Chat_App_Tutorial__Building_a_Desktop_Chat_App.svg)](https://metered.hashnode.dev/electron-chat-app-tutorial-building-a-desktop-chat-app)
[![JavaScript Functions: Why They're Essential to Understand? | Easy Guide - Part2](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/JavaScript_Functions__Why_They're_Essential_to_Understand____Easy_Guide_-_Part2.svg)](https://dev.to/aradwan20/javascript-functions-why-theyre-essential-to-understand-easy-guide-part2-3a6b)
[![Code your Laravel website faster with Stylify CSS | Stylify CSS](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/Code_your_Laravel_website_faster_with_Stylify_CSS___Stylify_CSS.svg)](https://stylifycss.com/blog/code-your-laravel-website-faster-with-stylify-css)


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
