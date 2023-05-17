# Github Readme Blog Post Action

A (somewhat) simple github action that generates a set of cards for recent blog posts.

Here's an example of how it looks given the URLs for DEV Community, JavaScript Weekly, and Echo JS:

<!-- post-list:start -->
## DEV Community

The most recent home feed on DEV Community.

[Read more](https://dev.to)
> Last updated: Tuesday, May 16, 2023 at 6:46:38 PM

> Showing 5 of 12 posts.

[![Node.js Crypto Trading For Beginners](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community/Node.js_Crypto_Trading_For_Beginners.svg)](https://dev.to/vasile_peste/nodejs-crypto-trading-for-beginners-2pn1)
[![The Next Language Evolution](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community/The_Next_Language_Evolution.svg)](https://dev.to/btfranklin/the-next-language-evolution-3afo)
[![Mastering the 5 SOLID Principles in Software Engineering.](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community/Mastering_the_5_SOLID_Principles_in_Software_Engineering..svg)](https://dev.to/iflames_1/mastering-the-5-solid-principles-in-software-engineering-2fn8)
[![WSL Error: Failed to Execute Process and Get User ID](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community/WSL_Error__Failed_to_Execute_Process_and_Get_User_ID.svg)](https://dev.to/ezzahirtaha/wsl-error-failed-to-execute-process-and-get-user-id-2fld)
[![After 20 years in tech, here’s what I wish I had all along (and how I’m building it)](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community/After_20_years_in_tech__here’s_what_I_wish_I_had_all_along_(and_how_I’m_building_it).svg)](https://dev.to/opencontextinc/after-20-years-in-tech-heres-what-i-wish-i-had-all-along-and-how-im-building-it-4f1f)


## JavaScript Weekly

A newsletter of JavaScript articles, news and cool projects

[Read more](https://javascriptweekly.com/)
> Last updated: Tuesday, May 16, 2023 at 6:46:41 PM

> Showing 4 of 4 posts.

[![Why Svelte is converting TypeScript to JSDoc](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/JavaScript_Weekly/Why_Svelte_is_converting_TypeScript_to_JSDoc.svg)](https://javascriptweekly.com/issues/638)
[!['It's a miracle anything about this ecosystem works at all.'](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/JavaScript_Weekly/'It's_a_miracle_anything_about_this_ecosystem_works_at_all.'.svg)](https://javascriptweekly.com/issues/637)
[![Did you know JavaScript is trademarked?](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/JavaScript_Weekly/Did_you_know_JavaScript_is_trademarked_.svg)](https://javascriptweekly.com/issues/636)
[![On the origin of packages](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/JavaScript_Weekly/On_the_origin_of_packages.svg)](https://javascriptweekly.com/issues/635)


## Echo JS

Description pending

[Read more](
http://www.echojs.com
)
> Last updated: Tuesday, May 16, 2023 at 6:46:50 PM

> Showing 5 of 30 posts.

[![GitHub - f3rno64/track-time-cli: CLI utility for tracking your time in time sheets](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/GitHub_-_f3rno64_track-time-cli__CLI_utility_for_tracking_your_time_in_time_sheets.svg)](https://github.com/f3rno64/track-time-cli)
[![Infinite scrolling with native JavaScript using the Fetch API](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/Infinite_scrolling_with_native_JavaScript_using_the_Fetch_API.svg)](https://www.ma-no.org/en/programming/javascript/infinite-scrolling-with-native-javascript-using-the-fetch-api)
[![How And When To Debounce And Throttle In React](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/How_And_When_To_Debounce_And_Throttle_In_React.svg)](https://soshace.com/how-and-when-to-debounce-and-throttle-in-react/)
[![
Build a directory app with search filters using Remix and Tigris Data
](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/_Build_a_directory_app_with_search_filters_using_Remix_and_Tigris_Data_.svg)](https://www.learnwithjason.dev/blog/tigris-data-remix-custom-search/)
[![API with NestJS #108. Date and time with Prisma and PostgreSQL](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/API_with_NestJS__108._Date_and_time_with_Prisma_and_PostgreSQL.svg)](https://wanago.io/2023/05/15/api-nestjs-prisma-date-timezones-postgresql/)


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
