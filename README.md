# Github Readme Blog Post Action

A (somewhat) simple github action that generates a set of cards for recent blog posts.

Here's an example of how it looks given the URLs for DEV Community, JavaScript Weekly, and Echo JS:

<!-- post-list:start -->
## DEV Community

The most recent home feed on DEV Community.

[Read more](https://dev.to)
> Last updated: Wednesday, April 27, 2022 at 7:06:10 PM

> Showing 5 of 12 posts.

[![Nesneye Yönelik (Object-Orientated) Dil Özellikleri 💫 🌌 ✨](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community/Nesneye_Yönelik_(Object-Orientated)_Dil_Özellikleri_💫_🌌_✨.svg)](https://dev.to/gulsenkeskin/nesneye-yonelik-object-orientated-dil-ozellikleri-2lkd)
[![FLiP-Py-Pi-GasThermal: Building an IoT Edge Application with Apache Pulsar and Python for TVOC and CO2 Ingest](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community/FLiP-Py-Pi-GasThermal__Building_an_IoT_Edge_Application_with_Apache_Pulsar_and_Python_for_TVOC_and_CO2_Ingest.svg)](https://dev.to/tspannhw/flip-py-pi-gasthermal-building-an-iot-edge-application-with-apache-pulsar-and-python-for-tvoc-and-co2-ingest-1gdo)
[![Accessing localhost application over the internet - with Ngrok](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community/Accessing_localhost_application_over_the_internet_-_with_Ngrok.svg)](https://dev.to/omoyemi/accessing-localhost-application-over-the-internet-with-ngrok-ljh)
[![How to prepare for SC-400 Exam ?.](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community/How_to_prepare_for_SC-400_Exam__..svg)](https://dev.to/makendrang/how-to-prepare-for-sc-400-exam--3ipo)
[![Do you Prototype before coding?](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community/Do_you_Prototype_before_coding_.svg)](https://dev.to/efraimjer/do-you-prototype-before-coding-24l8)


## JavaScript Weekly

A newsletter of JavaScript articles, news and cool projects

[Read more](https://javascriptweekly.com/)
> Last updated: Wednesday, April 27, 2022 at 7:06:13 PM

> Showing 4 of 4 posts.

[![Node.js 18, WebAssembly 2.0, and Ember 4.3](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/JavaScript_Weekly/Node.js_18__WebAssembly_2.0__and_Ember_4.3.svg)](https://javascriptweekly.com/issues/586)
[![On function composition in JavaScript](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/JavaScript_Weekly/On_function_composition_in_JavaScript.svg)](https://javascriptweekly.com/issues/585)
[![Format JavaScript as the Romans do?](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/JavaScript_Weekly/Format_JavaScript_as_the_Romans_do_.svg)](https://javascriptweekly.com/issues/584)
[![Time to get decorating](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/JavaScript_Weekly/Time_to_get_decorating.svg)](https://javascriptweekly.com/issues/583)


## Echo JS

Description pending

[Read more](
http://www.echojs.com
)
> Last updated: Wednesday, April 27, 2022 at 7:06:16 PM

> Showing 5 of 30 posts.

[![tsocket - expose localhost to internet | tsocket - Share local site to internet](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/tsocket_-_expose_localhost_to_internet___tsocket_-_Share_local_site_to_internet.svg)](https://www.metered.ca/tools/tsocket/)
[![Building a Video Chat App with Next.js, 100ms, and TailwindCSS](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/Building_a_Video_Chat_App_with_Next.js__100ms__and_TailwindCSS.svg)](https://blog.openreplay.com/building-a-video-chat-app-with-next-js-100ms-and-tailwindcss)
[![Pnpm and Nx monorepo. Part 1 | Javier Brea](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/Pnpm_and_Nx_monorepo._Part_1___Javier_Brea.svg)](
https://www.javierbrea.com/blog/pnpm-nx-monorepo-01/
)
[![GitHub - p-chan/react-adobe-fonts: A React library to use Adobe Fonts](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/GitHub_-_p-chan_react-adobe-fonts__A_React_library_to_use_Adobe_Fonts.svg)](https://github.com/p-chan/react-adobe-fonts)
[![Episode 8 - Data Oriented Programming with Yehonathan Sharvit - 20minJS](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/Episode_8_-_Data_Oriented_Programming_with_Yehonathan_Sharvit_-_20minJS.svg)](https://podcast.20minjs.com/1952066/10498331-episode-8-data-oriented-programming-with-yehonathan-sharvit)


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
