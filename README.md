# Github Readme Blog Post Action

A (somewhat) simple github action that generates a set of cards for recent blog posts.

Here's an example of how it looks given the URLs for DEV Community, JavaScript Weekly, and Echo JS:

<!-- post-list:start -->
## DEV Community

The most recent home feed on DEV Community.

[Read more](https://dev.to)
> Last updated: Thursday, June 15, 2023 at 6:50:41 PM

> Showing 5 of 12 posts.

[![Por que você não deve desistir de se tornar um desenvolvedor(a): uma jornada de 💻código,☕café e 😁memes.](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community/Por_que_você_não_deve_desistir_de_se_tornar_um_desenvolvedor(a)__uma_jornada_de_💻código_☕café_e_😁memes..svg)](https://dev.to/diegoreports/por-que-voce-nao-deve-desistir-de-se-tornar-um-desenvolvedora-uma-jornada-de-codigocafe-e-memes-2k7p)
[![Healthcare’s Digital Accessibility Problem](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community/Healthcare’s_Digital_Accessibility_Problem.svg)](https://dev.to/linearb/healthcares-digital-accessibility-problem-a46)
[![What are facades and how to use it on ruby](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community/What_are_facades_and_how_to_use_it_on_ruby.svg)](https://dev.to/cherryramatis/what-are-facades-and-how-to-use-it-on-ruby-5h3h)
[![JavaScript localStorage: The complete guide](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community/JavaScript_localStorage__The_complete_guide.svg)](https://dev.to/alakkadshaw/javascript-localstorage-the-complete-guide-5a9a)
[![Ace the "Tell me about a time you made a mistake" question in your next interview.](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community/Ace_the__Tell_me_about_a_time_you_made_a_mistake__question_in_your_next_interview..svg)](https://dev.to/martinkr/ace-the-tell-me-about-a-time-you-made-a-mistake-question-in-your-next-interview-2c7)


## JavaScript Weekly

A newsletter of JavaScript articles, news and cool projects

[Read more](https://javascriptweekly.com/)
> Last updated: Thursday, June 15, 2023 at 6:50:44 PM

> Showing 4 of 4 posts.

[![11 years of JavaScript on top](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/JavaScript_Weekly/11_years_of_JavaScript_on_top.svg)](https://javascriptweekly.com/issues/643)
[![Douglas Crockford calls JavaScript 'smelly.'](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/JavaScript_Weekly/Douglas_Crockford_calls_JavaScript_'smelly.'.svg)](https://javascriptweekly.com/issues/642)
[![Bundle-time macros with Bun](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/JavaScript_Weekly/Bundle-time_macros_with_Bun.svg)](https://javascriptweekly.com/issues/641)
[![Microsoft shrunk the TypeScript](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/JavaScript_Weekly/Microsoft_shrunk_the_TypeScript.svg)](https://javascriptweekly.com/issues/640)


## Echo JS

Description pending

[Read more](
http://www.echojs.com
)
> Last updated: Thursday, June 15, 2023 at 6:50:46 PM

> Showing 5 of 30 posts.

[![Flutter Live Streaming: A Complete Guide](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/Flutter_Live_Streaming__A_Complete_Guide.svg)](https://dev.to/usp/flutter-live-streaming-a-complete-guide-2634)
[![Do your part to secure the open source supply chain](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/Do_your_part_to_secure_the_open_source_supply_chain.svg)](https://github.com/readme/guides/dependency-risk)
[![How to upload files to the server using JavaScript](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/How_to_upload_files_to_the_server_using_JavaScript.svg)](https://www.ma-no.org/en/programming/javascript/how-to-upload-files-to-the-server-using-javascript)
[![GitHub - smridhgupta/alpha-wpes: Windows Privilege Escalation Tool](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/GitHub_-_smridhgupta_alpha-wpes__Windows_Privilege_Escalation_Tool.svg)](https://github.com/smridhgupta/alpha-wpes)
[![Building a Live Streaming App with React and Video SDK](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/Building_a_Live_Streaming_App_with_React_and_Video_SDK.svg)](https://dev.to/video-sdk/react-live-streaming-32bl)


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
