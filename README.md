# Github Readme Blog Post Action

A (somewhat) simple github action that generates a set of cards for recent blog posts.

Here's an example of how it looks given the URLs for DEV Community, JavaScript Weekly, and Echo JS:

<!-- post-list:start -->
## DEV Community

The most recent home feed on DEV Community.

[Read more](https://dev.to)
> Last updated: Wednesday, March 1, 2023 at 5:18:37 AM

> Showing 5 of 12 posts.

[![Why You Should Love Do Untils in Power Automate](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community/Why_You_Should_Love_Do_Untils_in_Power_Automate.svg)](https://dev.to/wyattdave/why-you-should-love-do-untils-in-power-automate-3ic8)
[![Making GraphQL Codegen Work For You: GraphQL Integration with React and TypeScript](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community/Making_GraphQL_Codegen_Work_For_You__GraphQL_Integration_with_React_and_TypeScript.svg)](https://dev.to/novu/making-graphql-codegen-work-for-you-graphql-integration-with-react-and-typescript-3bbm)
[![Convert HTML To Notion Blocks](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community/Convert_HTML_To_Notion_Blocks.svg)](https://dev.to/zirkelc/convert-html-to-notion-blocks-3fcm)
[![IQ Testlerinde Başarılı Olmak İçin İpuçları ve Stratejiler](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community/IQ_Testlerinde_Başarılı_Olmak_İçin_İpuçları_ve_Stratejiler.svg)](https://dev.to/iqsertifikasi/iq-testlerinde-basarili-olmak-icin-ipuclari-ve-stratejiler-27hi)
[![Usability Testing: The Key to Creating User-Friendly and Effective Products](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community/Usability_Testing__The_Key_to_Creating_User-Friendly_and_Effective_Products.svg)](https://dev.to/msmello_/usability-testing-the-key-to-creating-user-friendly-and-effective-products-5fke)


## JavaScript Weekly

A newsletter of JavaScript articles, news and cool projects

[Read more](https://javascriptweekly.com/)
> Last updated: Wednesday, March 1, 2023 at 5:18:40 AM

> Showing 4 of 4 posts.

[![ECMAScript 2023 for President](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/JavaScript_Weekly/ECMAScript_2023_for_President.svg)](https://javascriptweekly.com/issues/627)
[![JavaScript sans build systems?](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/JavaScript_Weekly/JavaScript_sans_build_systems_.svg)](https://javascriptweekly.com/issues/626)
[![Bringing JavaScript to WebAssembly](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/JavaScript_Weekly/Bringing_JavaScript_to_WebAssembly.svg)](https://javascriptweekly.com/issues/625)
[![Ways to remove event listeners](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/JavaScript_Weekly/Ways_to_remove_event_listeners.svg)](https://javascriptweekly.com/issues/624)


## Echo JS

Description pending

[Read more](
http://www.echojs.com
)
> Last updated: Wednesday, March 1, 2023 at 5:18:43 AM

> Showing 5 of 30 posts.

[![GitHub - rpgeeganage/ots-share-app: A self-hosting app to share secrets only one-time.](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/GitHub_-_rpgeeganage_ots-share-app__A_self-hosting_app_to_share_secrets_only_one-time..svg)](https://github.com/rpgeeganage/ots-share-app)
[![GitHub - aralroca/next-load: Load & consume data in an easy way in Next.js +13 app dir](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/GitHub_-_aralroca_next-load__Load___consume_data_in_an_easy_way_in_Next.js_+13_app_dir.svg)](https://github.com/aralroca/next-load)
[![
directory.mirror.co.uk | Joe Ricotta - Real Estate Developer
](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/_directory.mirror.co.uk___Joe_Ricotta_-_Real_Estate_Developer_.svg)](
https://directory.mirror.co.uk/company/249547b0b5395a389ba77695ecb1358a
)
[![What is ref() in Vue?](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/What_is_ref()_in_Vue_.svg)](https://dmitripavlutin.com/ref-in-vue/)
[![GitHub - ColonelParrot/feedbackplus: Screenshotting and screenshot editing for your feedback forms with JavaScript.](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/GitHub_-_ColonelParrot_feedbackplus__Screenshotting_and_screenshot_editing_for_your_feedback_forms_with_JavaScript..svg)](https://github.com/ColonelParrot/feedbackplus)


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
