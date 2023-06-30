# Github Readme Blog Post Action

A (somewhat) simple github action that generates a set of cards for recent blog posts.

Here's an example of how it looks given the URLs for DEV Community, JavaScript Weekly, and Echo JS:

<!-- post-list:start -->
## DEV Community

The most recent home feed on DEV Community.

[Read more](https://dev.to)
> Last updated: Thursday, June 29, 2023 at 6:53:32 PM

> Showing 5 of 12 posts.

[![Electron.js Tutorial](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community/Electron.js_Tutorial.svg)](https://dev.to/kiraaziz/electronjs-tutorial-1cb3)
[![Demystifying React useState Hook: Simplifying State Management in Functional Components](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community/Demystifying_React_useState_Hook__Simplifying_State_Management_in_Functional_Components.svg)](https://dev.to/bouquet/demystifying-react-usestate-hook-simplifying-state-management-in-functional-components-4n83)
[![My experience deploying a Next.js application on Netlify (using Next App Router)](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community/My_experience_deploying_a_Next.js_application_on_Netlify_(using_Next_App_Router).svg)](https://dev.to/alvesjessica/my-experience-deploying-a-nextjs-application-on-netlify-using-next-app-router-3k1b)
[![GitHub’s Best Practices(Streamlining Collaboration and Maximizing Efficiency)](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community/GitHub’s_Best_Practices(Streamlining_Collaboration_and_Maximizing_Efficiency).svg)](https://dev.to/kelechikizito/githubs-best-practicesstreamlining-collaboration-and-maximizing-efficiency-kk3)
[![Filtering TypeScript value types](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community/Filtering_TypeScript_value_types.svg)](https://dev.to/logrocket/filtering-typescript-value-types-4adh)


## JavaScript Weekly

A newsletter of JavaScript articles, news and cool projects

[Read more](https://javascriptweekly.com/)
> Last updated: Thursday, June 29, 2023 at 6:53:36 PM

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
> Last updated: Thursday, June 29, 2023 at 6:53:38 PM

> Showing 5 of 30 posts.

[![Type is the ultimate. Type eclipses everything.](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/Type_is_the_ultimate._Type_eclipses_everything..svg)](https://adropincalm.com/blog/type-is-the-ultimate-type-eclipses-everything/)
[![Permit or Deny Login Requests Using Auth0 Actions](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/Permit_or_Deny_Login_Requests_Using_Auth0_Actions.svg)](https://auth0.com/blog/permit-or-deny-login-requests-using-auth0-actions/)
[![GitHub - FeatureProbe/FeatureProbe: FeatureProbe is an open source feature management service. 开源的高效可视化『特性』管理平台，提供特性开关、灰度发布、AB实验全功能。](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/GitHub_-_FeatureProbe_FeatureProbe__FeatureProbe_is_an_open_source_feature_management_service._开源的高效可视化『特性』管理平台，提供特性开关、灰度发布、AB实验全功能。.svg)](https://github.com/FeatureProbe/FeatureProbe)
[![NPM registry vulnerable to 'manifest confusion' abuse](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/NPM_registry_vulnerable_to_'manifest_confusion'_abuse.svg)](https://www.theregister.com/2023/06/27/javascript_registry_npm_vulnerable/)
[![GitHub - kaangiray26/endless: Unifying the social media experience](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/GitHub_-_kaangiray26_endless__Unifying_the_social_media_experience.svg)](https://github.com/kaangiray26/endless)


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
