# Github Readme Blog Post Action

A (somewhat) simple github action that generates a set of cards for recent blog posts.

Here's an example of how it looks given the URLs for DEV Community, JavaScript Weekly, and Echo JS:

<!-- post-list:start -->
## DEV Community 👩‍💻👨‍💻

The most recent home feed on DEV Community 👩‍💻👨‍💻.

[Read more](https://dev.to)
> Last updated: Thursday, February 16, 2023 at 11:12:26 PM

> Showing 5 of 12 posts.

[![AWS Pipeline + GitHub: Automating Your Software Delivery Process](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community_👩‍💻👨‍💻/AWS_Pipeline_+_GitHub__Automating_Your_Software_Delivery_Process.svg)](https://dev.to/aws-builders/aws-pipeline-github-automating-your-software-delivery-process-55i0)
[![Put ChatGPT on your website for €49 per month](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community_👩‍💻👨‍💻/Put_ChatGPT_on_your_website_for_€49_per_month.svg)](https://dev.to/polterguy/put-chatgpt-on-your-website-for-eu49-per-month-1kaj)
[![Tricky JavaScript Interview Question Using Array And Object Destructuring Combined](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community_👩‍💻👨‍💻/Tricky_JavaScript_Interview_Question_Using_Array_And_Object_Destructuring_Combined.svg)](https://dev.to/myogeshchavan97/tricky-javascript-interview-question-using-array-and-object-destructuring-combined-nj5)
[![Calisthenics exercises recommendation software](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community_👩‍💻👨‍💻/Calisthenics_exercises_recommendation_software.svg)](https://dev.to/ftapiaa27/calisthenics-exercises-recommendation-software-2672)
[![E quando o hello world já começa dando errado: a cultura de escrever artigos com tutoriais que só dão certo.](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community_👩‍💻👨‍💻/E_quando_o_hello_world_já_começa_dando_errado__a_cultura_de_escrever_artigos_com_tutoriais_que_só_dão_certo..svg)](https://dev.to/feministech/e-quando-o-hello-world-ja-comeca-dando-errado-a-cultura-de-escrever-artigos-com-tutoriais-que-so-dao-certo-379m)


## JavaScript Weekly

A newsletter of JavaScript articles, news and cool projects

[Read more](https://javascriptweekly.com/)
> Last updated: Thursday, February 16, 2023 at 11:12:30 PM

> Showing 4 of 4 posts.

[![Bringing JavaScript to WebAssembly](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/JavaScript_Weekly/Bringing_JavaScript_to_WebAssembly.svg)](https://javascriptweekly.com/issues/625)
[![Ways to remove event listeners](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/JavaScript_Weekly/Ways_to_remove_event_listeners.svg)](https://javascriptweekly.com/issues/624)
[![Astro 2.0 and TypeScript 5.0 beta](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/JavaScript_Weekly/Astro_2.0_and_TypeScript_5.0_beta.svg)](https://javascriptweekly.com/issues/623)
[![Why document.write() is bad](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/JavaScript_Weekly/Why_document.write()_is_bad.svg)](https://javascriptweekly.com/issues/622)


## Echo JS

Description pending

[Read more](
http://www.echojs.com
)
> Last updated: Thursday, February 16, 2023 at 11:12:33 PM

> Showing 5 of 30 posts.

[![
Free Node.js Full Stack Developer Course: Build Your Own Photo Sharing App
](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/_Free_Node.js_Full_Stack_Developer_Course__Build_Your_Own_Photo_Sharing_App_.svg)](
https://kinsta.com/academy/course/node-js-full-stack-developer/
)
[![Protect Your Site from Bots with CAPTCHAs and JavaScript Challenges](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/Protect_Your_Site_from_Bots_with_CAPTCHAs_and_JavaScript_Challenges.svg)](https://auth0.com/blog/protect-site-from-bots-with-captchas-javascript-challenges/)
[![GitHub - StopNGo/react-proto: Template React project with full TypeScript and SSR support.](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/GitHub_-_StopNGo_react-proto__Template_React_project_with_full_TypeScript_and_SSR_support..svg)](https://github.com/StopNGo/react-proto)
[![How to Effortlessly Migrate from Styled Components CSS-in-JS to Stylify Utility-First CSS for Better React Development. | Stylify CSS](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/How_to_Effortlessly_Migrate_from_Styled_Components_CSS-in-JS_to_Stylify_Utility-First_CSS_for_Better_React_Development.___Stylify_CSS.svg)](https://stylifycss.com/blog/how-to-migrate-from-styled-components)
[![Core-js maintainer complains open source is broken](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/Core-js_maintainer_complains_open_source_is_broken.svg)](https://www.theregister.com/2023/02/15/corejs_russia_open_source/)


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
