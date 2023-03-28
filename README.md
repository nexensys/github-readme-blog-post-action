# Github Readme Blog Post Action

A (somewhat) simple github action that generates a set of cards for recent blog posts.

Here's an example of how it looks given the URLs for DEV Community, JavaScript Weekly, and Echo JS:

<!-- post-list:start -->
## DEV Community

The most recent home feed on DEV Community.

[Read more](https://dev.to)
> Last updated: Tuesday, March 28, 2023 at 6:17:39 AM

> Showing 5 of 12 posts.

[![An Introduction to Solana Pay and how to Integrate it into Your Next.js App](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community/An_Introduction_to_Solana_Pay_and_how_to_Integrate_it_into_Your_Next.js_App.svg)](https://dev.to/avneesh0612/an-introduction-to-solana-pay-and-how-to-integrate-it-into-your-nextjs-app-36kl)
[![Deploy static websites to Amazon S3](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community/Deploy_static_websites_to_Amazon_S3.svg)](https://dev.to/aws-builders/deploy-static-websites-to-amazon-s3-49lf)
[![Revolutionizing Data Processing with CXXGraph: A Comprehensive Guide to Graph Data Structures in C++](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community/Revolutionizing_Data_Processing_with_CXXGraph__A_Comprehensive_Guide_to_Graph_Data_Structures_in_C++.svg)](https://dev.to/zigrazor/revolutionizing-data-processing-with-cxxgraph-a-comprehensive-guide-to-graph-data-structures-in-c-3od5)
[![A migration to Vue 3: part 2](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community/A_migration_to_Vue_3__part_2.svg)](https://dev.to/studyportals/a-migration-to-vue-3-part-2-40b0)
[![🔎 What is Lexical Scope in JavaScript?](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community/🔎_What_is_Lexical_Scope_in_JavaScript_.svg)](https://dev.to/catherineisonline/what-is-lexical-scope-in-javascript-4gi8)


## JavaScript Weekly

A newsletter of JavaScript articles, news and cool projects

[Read more](https://javascriptweekly.com/)
> Last updated: Tuesday, March 28, 2023 at 6:17:43 AM

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
> Last updated: Tuesday, March 28, 2023 at 6:17:48 AM

> Showing 5 of 30 posts.

[![GitHub - Genez-io/genezio: Run a completely functional backend in just a few minutes.](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/GitHub_-_Genez-io_genezio__Run_a_completely_functional_backend_in_just_a_few_minutes..svg)](https://github.com/Genez-io/genezio)
[![Understanding TypeScript Function Types: A Beginner's Guide](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/Understanding_TypeScript_Function_Types__A_Beginner's_Guide.svg)](https://dmitripavlutin.com/typescript-function-type/)
[![v0.2.0 Envio — The Modern And Secure CLI Tool You Absolutely Need Environment Variables](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/v0.2.0_Envio_—_The_Modern_And_Secure_CLI_Tool_You_Absolutely_Need_Environment_Variables.svg)](https://medium.com/@humblepenguinoffical/v0-2-0-envio-the-modern-and-secure-cli-tool-you-absolutely-need-environment-variables-d25dcb014ffd)
[![API with NestJS #101. Managing sensitive data using the AWS Secrets Manager](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/API_with_NestJS__101._Managing_sensitive_data_using_the_AWS_Secrets_Manager.svg)](https://wanago.io/2023/03/27/api-nestjs-aws-secret-manager/)
[![Use React Hooks with the State Hook for Easier State Management | React hooks](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/Use_React_Hooks_with_the_State_Hook_for_Easier_State_Management___React_hooks.svg)](http://dskcode.com/use-react-hooks-with-the-state-hook-for-easier-state-management)


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
