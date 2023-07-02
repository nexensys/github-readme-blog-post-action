# Github Readme Blog Post Action

A (somewhat) simple github action that generates a set of cards for recent blog posts.

Here's an example of how it looks given the URLs for DEV Community, JavaScript Weekly, and Echo JS:

<!-- post-list:start -->
## DEV Community

The most recent home feed on DEV Community.

[Read more](https://dev.to)
> Last updated: Sunday, July 2, 2023 at 6:16:12 AM

> Showing 5 of 12 posts.

[![Restaurant Mobile App using flutter](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community/Restaurant_Mobile_App_using_flutter.svg)](https://dev.to/realnamehidden1_61/restaurant-mobile-app-ui-design-5gg7)
[![Top Cloud Base Tricks Every DevOps Must Know](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community/Top_Cloud_Base_Tricks_Every_DevOps_Must_Know.svg)](https://dev.to/scofieldidehen/top-cloud-base-tricks-every-devops-must-know-1b01)
[![Use OPA for Application-Level Authorization, from RBAC to ABAC in Scale](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community/Use_OPA_for_Application-Level_Authorization__from_RBAC_to_ABAC_in_Scale.svg)](https://dev.to/permit_io/use-opa-for-application-level-authorization-from-rbac-to-abac-in-scale-36d7)
[![Static hosting free](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community/Static_hosting_free.svg)](https://dev.to/irishgeoff11/static-hosting-free-ia2)
[![Sites you should know: Part Two](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community/Sites_you_should_know__Part_Two.svg)](https://dev.to/roshdiraed/sites-you-should-know-part-two-48m7)


## JavaScript Weekly

A newsletter of JavaScript articles, news and cool projects

[Read more](https://javascriptweekly.com/)
> Last updated: Sunday, July 2, 2023 at 6:16:15 AM

> Showing 4 of 4 posts.

[![This is a doozy of an issue](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/JavaScript_Weekly/This_is_a_doozy_of_an_issue.svg)](https://javascriptweekly.com/issues/645)
[![Svelte 4 released](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/JavaScript_Weekly/Svelte_4_released.svg)](https://javascriptweekly.com/issues/644)
[![11 years of JavaScript on top](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/JavaScript_Weekly/11_years_of_JavaScript_on_top.svg)](https://javascriptweekly.com/issues/643)
[![Douglas Crockford calls JavaScript 'smelly.'](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/JavaScript_Weekly/Douglas_Crockford_calls_JavaScript_'smelly.'.svg)](https://javascriptweekly.com/issues/642)


## Echo JS

Description pending

[Read more](
http://www.echojs.com
)
> Last updated: Sunday, July 2, 2023 at 6:16:17 AM

> Showing 5 of 30 posts.

[![Efficient Techniques to Remove Duplicates from Arrays in JavaScript](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/Efficient_Techniques_to_Remove_Duplicates_from_Arrays_in_JavaScript.svg)](https://www.js-tutorials.com/javascript-tutorial/efficient-techniques-to-remove-duplicates-from-arrays-in-javascript/)
[![GitHub - DeXoHigh/dexocdn: DeXoCDN allows developers to easily distribute and serve static assets to improve performance and reduce server load.](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/GitHub_-_DeXoHigh_dexocdn__DeXoCDN_allows_developers_to_easily_distribute_and_serve_static_assets_to_improve_performance_and_reduce_server_load..svg)](https://github.com/DeXoHigh/dexocdn)
[![Type is the ultimate. Type eclipses everything.](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/Type_is_the_ultimate._Type_eclipses_everything..svg)](https://adropincalm.com/blog/type-is-the-ultimate-type-eclipses-everything/)
[![Permit or Deny Login Requests Using Auth0 Actions](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/Permit_or_Deny_Login_Requests_Using_Auth0_Actions.svg)](https://auth0.com/blog/permit-or-deny-login-requests-using-auth0-actions/)
[![GitHub - FeatureProbe/FeatureProbe: FeatureProbe is an open source feature management service. 开源的高效可视化『特性』管理平台，提供特性开关、灰度发布、AB实验全功能。](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/GitHub_-_FeatureProbe_FeatureProbe__FeatureProbe_is_an_open_source_feature_management_service._开源的高效可视化『特性』管理平台，提供特性开关、灰度发布、AB实验全功能。.svg)](https://github.com/FeatureProbe/FeatureProbe)


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
