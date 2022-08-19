# Github Readme Blog Post Action

A (somewhat) simple github action that generates a set of cards for recent blog posts.

Here's an example of how it looks given the URLs for DEV Community, JavaScript Weekly, and Echo JS:

<!-- post-list:start -->
## DEV Community

The most recent home feed on DEV Community.

[Read more](https://dev.to)
> Last updated: Friday, August 19, 2022 at 12:15:15 AM

> Showing 5 of 12 posts.

[![Manipulating the DOM using Javascript - traversing the DOM(part 2)✂️🕹](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community/Manipulating_the_DOM_using_Javascript_-_traversing_the_DOM(part_2)✂️🕹.svg)](https://dev.to/arikaturika/manipulating-the-dom-using-javascript-traversing-the-dompart-2-o7)
[![Javascript: How much do you debug](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community/Javascript__How_much_do_you_debug.svg)](https://dev.to/urstrulyvishwak/javascript-how-much-do-you-debug-41h)
[![Javascript Tagalog - Array Push Method](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community/Javascript_Tagalog_-_Array_Push_Method.svg)](https://dev.to/mmvergara/javascript-tagalog-array-push-method-296)
[![I spent <!-- post-list:start -->5 in DALL·E 2 credits creating this AI image, and here’s what I learned](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community/I_spent_<!-- post-list:start -->5_in_DALL·E_2_credits_creating_this_AI_image__and_here’s_what_I_learned.svg)](https://dev.to/joooyz/i-spent-15-in-dalle-2-credits-creating-this-ai-image-and-heres-what-i-learned-4hl1)
[![How to deploy the NextJS site to Vercel](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community/How_to_deploy_the_NextJS_site_to_Vercel.svg)](https://dev.to/surajondev/how-to-deploy-nextjs-site-to-vercel-1o37)


## JavaScript Weekly

A newsletter of JavaScript articles, news and cool projects

[Read more](https://javascriptweekly.com/)
> Last updated: Friday, August 19, 2022 at 12:15:18 AM

> Showing 4 of 4 posts.

[![A way to automatically generate regexes from examples](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/JavaScript_Weekly/A_way_to_automatically_generate_regexes_from_examples.svg)](https://javascriptweekly.com/issues/602)
[![Genius misuse of WOFF 2 and Brotli to win a JavaScript contest.](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/JavaScript_Weekly/Genius_misuse_of_WOFF_2_and_Brotli_to_win_a_JavaScript_contest..svg)](https://javascriptweekly.com/issues/601)
[![Douglas Crockford on 'retiring' JavaScript](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/JavaScript_Weekly/Douglas_Crockford_on_'retiring'_JavaScript.svg)](https://javascriptweekly.com/issues/600)
[![Common JavaScript issues developers face](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/JavaScript_Weekly/Common_JavaScript_issues_developers_face.svg)](https://javascriptweekly.com/issues/599)


## Echo JS

Description pending

[Read more](
http://www.echojs.com
)
> Last updated: Friday, August 19, 2022 at 12:15:23 AM

> Showing 5 of 30 posts.

[![How to Remove Line Chart Fill in ChartJS](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/How_to_Remove_Line_Chart_Fill_in_ChartJS.svg)](
https://masteringjs.io/tutorials/chartjs/line-chart-fill-color
)
[![Node.js - require is not defined javascript](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/Node.js_-_require_is_not_defined_javascript.svg)](https://www.js-tutorials.com/nodejs-tutorial/require-is-not-defined-js/)
[![
Supabase – Realtime: Multiplayer Edition | Hacker News
](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/_Supabase_–_Realtime__Multiplayer_Edition___Hacker_News_.svg)](
https://news.ycombinator.com/item?id=32510405
)
[![How big is a JavaScript string?](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/How_big_is_a_JavaScript_string_.svg)](https://blog.bitsrc.io/how-big-is-a-string-ef2af3d222e6)
[![Episode 24 - Security in the JavaScript ecosystem with Liran Tal - 20minJS](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/Episode_24_-_Security_in_the_JavaScript_ecosystem_with_Liran_Tal_-_20minJS.svg)](https://podcast.20minjs.com/1952066/11146790-episode-24-security-in-the-javascript-ecosystem-with-liran-tal)


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
