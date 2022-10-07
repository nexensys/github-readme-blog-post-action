# Github Readme Blog Post Action

A (somewhat) simple github action that generates a set of cards for recent blog posts.

Here's an example of how it looks given the URLs for DEV Community, JavaScript Weekly, and Echo JS:

<!-- post-list:start -->
## DEV Community 👩‍💻👨‍💻

The most recent home feed on DEV Community 👩‍💻👨‍💻.

[Read more](https://dev.to)
> Last updated: Friday, October 7, 2022 at 6:25:32 AM

> Showing 5 of 12 posts.

[![In One Minute : Jenkins](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community_👩‍💻👨‍💻/In_One_Minute___Jenkins.svg)](https://dev.to/rakeshkr2/in-one-minute-jenkins-21c)
[![15 GitHub Repositories to Contribute for Hacktoberfest 2022](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community_👩‍💻👨‍💻/15_GitHub_Repositories_to_Contribute_for_Hacktoberfest_2022.svg)](https://dev.to/atapas/15-github-repositories-to-contribute-for-hacktoberfest-2022-215d)
[![Django API Generator - Free Tool (Updated)](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community_👩‍💻👨‍💻/Django_API_Generator_-_Free_Tool_(Updated).svg)](https://dev.to/sm0ke/django-api-generator-free-tool-updated-5d99)
[![9 business tech events worth to visit](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community_👩‍💻👨‍💻/9_business_tech_events_worth_to_visit.svg)](https://dev.to/superface/9-business-tech-events-worth-to-visit-4pi4)
[![9 reasons why you should learn to code in the age of no-code tools & gain an unfair advantage.](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community_👩‍💻👨‍💻/9_reasons_why_you_should_learn_to_code_in_the_age_of_no-code_tools___gain_an_unfair_advantage..svg)](https://dev.to/swastikyadav/9-reasons-why-you-should-learn-to-code-in-the-age-of-no-code-tools-gain-an-unfair-advantage-32mb)


## JavaScript Weekly

A newsletter of JavaScript articles, news and cool projects

[Read more](https://javascriptweekly.com/)
> Last updated: Friday, October 7, 2022 at 6:25:34 AM

> Showing 4 of 4 posts.

[![How TypeScript 4.9 satisfies](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/JavaScript_Weekly/How_TypeScript_4.9_satisfies.svg)](https://javascriptweekly.com/issues/608)
[![Extractors for ECMAScript](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/JavaScript_Weekly/Extractors_for_ECMAScript.svg)](https://javascriptweekly.com/issues/607)
[![Seven weird ways to call a JavaScript function](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/JavaScript_Weekly/Seven_weird_ways_to_call_a_JavaScript_function.svg)](https://javascriptweekly.com/issues/606)
[![Anyone know Larry Ellison?](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/JavaScript_Weekly/Anyone_know_Larry_Ellison_.svg)](https://javascriptweekly.com/issues/605)


## Echo JS

Description pending

[Read more](
http://www.echojs.com
)
> Last updated: Friday, October 7, 2022 at 6:25:40 AM

> Showing 5 of 30 posts.

[![How to Get Started With a Clean Architecture Template for NodeJS, Ts.ED and TypeScript | HackerNoon](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/How_to_Get_Started_With_a_Clean_Architecture_Template_for_NodeJS__Ts.ED_and_TypeScript___HackerNoon.svg)](
https://hackernoon.com/how-to-get-started-with-a-clean-architecture-template-for-nodejs-tsed-and-typescript
)
[![Simple way to add custom context menus to web pages.](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/Simple_way_to_add_custom_context_menus_to_web_pages..svg)](https://dev.to/andreygermanov/simple-way-to-add-custom-context-menus-to-web-pages-10lc)
[![Arif Patel (UK/Preston/Dubai)](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/Arif_Patel_(UK_Preston_Dubai).svg)](/announcements/greetings/personal-message/20027442.arif-patel-uk-preston-dubai/)
[![Mobile App Development Company India, USA- Inventcolabs](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/Mobile_App_Development_Company_India__USA-_Inventcolabs.svg)](https://www.inventcolabssoftware.com/)
[![I turned JS into a compiled language (for fun and Wasm) — surma.dev](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/I_turned_JS_into_a_compiled_language_(for_fun_and_Wasm)_—_surma.dev.svg)](https://surma.dev/things/compile-js/)


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
