# Github Readme Blog Post Action

A (somewhat) simple github action that generates a set of cards for recent blog posts.

Here's an example of how it looks given the URLs for DEV Community, JavaScript Weekly, and Echo JS:

<!-- post-list:start -->
## DEV Community 👩‍💻👨‍💻

The most recent home feed on DEV Community 👩‍💻👨‍💻.

[Read more](https://dev.to)
> Last updated: Tuesday, January 31, 2023 at 11:10:55 AM

> Showing 5 of 12 posts.

[![Build a Team permissions system in Node.js app using Auth0 and Permify - Part 2](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community_👩‍💻👨‍💻/Build_a_Team_permissions_system_in_Node.js_app_using_Auth0_and_Permify_-_Part_2.svg)](https://dev.to/permify/build-a-team-permissions-system-in-nodejs-app-using-auth0-and-permify-part-2-4i9d)
[![Build a team permissions system in Node.js app using Auth0 and Permify - Part 1](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community_👩‍💻👨‍💻/Build_a_team_permissions_system_in_Node.js_app_using_Auth0_and_Permify_-_Part_1.svg)](https://dev.to/permify/build-a-team-permissions-system-in-nodejs-app-using-auth0-and-permify-part-1-52bo)
[![21 Problem Solving Lessons to Ace Coding Interviews](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community_👩‍💻👨‍💻/21_Problem_Solving_Lessons_to_Ace_Coding_Interviews.svg)](https://dev.to/codewithvoid/21-problem-solving-lessons-to-ace-coding-interviews-268n)
[![AWS Lambda Smart Feature Flags — Now with Time Based Conditions](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community_👩‍💻👨‍💻/AWS_Lambda_Smart_Feature_Flags_—_Now_with_Time_Based_Conditions.svg)](https://dev.to/aws-builders/aws-lambda-smart-feature-flags-now-with-time-based-conditions-25oe)
[![I challenged myself to read every day, and it changed my life 📚](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community_👩‍💻👨‍💻/I_challenged_myself_to_read_every_day__and_it_changed_my_life_📚.svg)](https://dev.to/derlin/i-challenged-myself-to-read-every-day-and-it-changed-my-life-2oef)


## JavaScript Weekly

A newsletter of JavaScript articles, news and cool projects

[Read more](https://javascriptweekly.com/)
> Last updated: Tuesday, January 31, 2023 at 11:10:57 AM

> Showing 4 of 4 posts.

[![Astro 2.0 and TypeScript 5.0 beta](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/JavaScript_Weekly/Astro_2.0_and_TypeScript_5.0_beta.svg)](https://javascriptweekly.com/issues/623)
[![Why document.write() is bad](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/JavaScript_Weekly/Why_document.write()_is_bad.svg)](https://javascriptweekly.com/issues/622)
[![Java-Script Jarre](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/JavaScript_Weekly/Java-Script_Jarre.svg)](https://javascriptweekly.com/issues/621)
[![Looking at both 2022 and 2023](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/JavaScript_Weekly/Looking_at_both_2022_and_2023.svg)](https://javascriptweekly.com/issues/620)


## Echo JS

Description pending

[Read more](
http://www.echojs.com
)
> Last updated: Tuesday, January 31, 2023 at 11:11:01 AM

> Showing 5 of 30 posts.

[![How to Load Chart.js from CDNs](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/How_to_Load_Chart.js_from_CDNs.svg)](
https://masteringjs.io/tutorials/chartjs/cdn
)
[![GitHub - umutyesildal/yesildal.me-personal-portfolio: A lightweight, customizable and responsive single-page personal portfolio website, created by using Reactjs and Nextjs.](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/GitHub_-_umutyesildal_yesildal.me-personal-portfolio__A_lightweight__customizable_and_responsive_single-page_personal_portfolio_website__created_by_using_Reactjs_and_Nextjs..svg)](https://github.com/umutyesildal/yesildal.me-personal-portfolio)
[![GitHub - karaxuna/meerkat: Library to simplify working with mongodb aggregation framework.](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/GitHub_-_karaxuna_meerkat__Library_to_simplify_working_with_mongodb_aggregation_framework..svg)](https://github.com/karaxuna/meerkat)
[![Server side Rendering with Module-Federation ](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/Server_side_Rendering_with_Module-Federation_.svg)](https://microfrontends.substack.com/p/server-side-rendering-with-module)
[![API with NestJS #93. Deploying a NestJS app with Amazon ECS and RDS](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/API_with_NestJS__93._Deploying_a_NestJS_app_with_Amazon_ECS_and_RDS.svg)](https://wanago.io/2023/01/30/api-nestjs-amazon-aws-ecs-rds-ec2/)


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
