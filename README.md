# Github Readme Blog Post Action

A (somewhat) simple github action that generates a set of cards for recent blog posts.

Here's an example of how it looks given the URLs for DEV Community, JavaScript Weekly, and Echo JS:

<!-- post-list:start -->
## DEV Community

The most recent home feed on DEV Community.

[Read more](https://dev.to)
> Last updated: Sunday, April 23, 2023 at 6:14:47 AM

> Showing 5 of 12 posts.

[![Best 3 Bootstrap Alternatives](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community/Best_3_Bootstrap_Alternatives.svg)](https://dev.to/badbatunde/best-3-bootstrap-alternatives-4mgm)
[![Manage IAM Access Key Of AWS Service Connection In Azure DevOps Pipeline](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community/Manage_IAM_Access_Key_Of_AWS_Service_Connection_In_Azure_DevOps_Pipeline.svg)](https://dev.to/aws-builders/manage-iam-access-key-of-aws-service-connection-in-azure-devops-pipeline-481k)
[![Where did Microservices go](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community/Where_did_Microservices_go.svg)](https://dev.to/zenstack/where-did-microservices-go-8m)
[![10 Eye opening pictures that will change the way you think](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community/10_Eye_opening_pictures_that_will_change_the_way_you_think.svg)](https://dev.to/jon_snow789/10-eye-opening-pictures-that-will-change-the-way-you-think-4hc5)
[![13 Rules I Follow When Writing CSS To Make It Concise and Readable🚀💡](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community/13_Rules_I_Follow_When_Writing_CSS_To_Make_It_Concise_and_Readable🚀💡.svg)](https://dev.to/margishpatel/13-rules-i-follow-when-writing-css-to-make-it-concise-and-readable-2jkn)


## JavaScript Weekly

A newsletter of JavaScript articles, news and cool projects

[Read more](https://javascriptweekly.com/)
> Last updated: Sunday, April 23, 2023 at 6:14:49 AM

> Showing 4 of 4 posts.

[![On the origin of packages](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/JavaScript_Weekly/On_the_origin_of_packages.svg)](https://javascriptweekly.com/issues/635)
[![The return of ECMAScript 2023 (and Angular)](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/JavaScript_Weekly/The_return_of_ECMAScript_2023_(and_Angular).svg)](https://javascriptweekly.com/issues/634)
[![JavaScript on your schedule](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/JavaScript_Weekly/JavaScript_on_your_schedule.svg)](https://javascriptweekly.com/issues/633)
[![Import maps go universal](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/JavaScript_Weekly/Import_maps_go_universal.svg)](https://javascriptweekly.com/issues/632)


## Echo JS

Description pending

[Read more](
http://www.echojs.com
)
> Last updated: Sunday, April 23, 2023 at 6:14:52 AM

> Showing 5 of 30 posts.

[![
The 5 Easiest to Learn Programming Languages to Learn in 2023
](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/_The_5_Easiest_to_Learn_Programming_Languages_to_Learn_in_2023_.svg)](
https://frontnet.eu/the-5-easiest-to-learn-programming-languages-to-learn-in-2023/
)
[![The callsFake() Function in Sinon](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/The_callsFake()_Function_in_Sinon.svg)](
https://masteringjs.io/tutorials/sinon/callsfake
)
[![How to Write Comments in React: The Good, the Bad and the Ugly](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/How_to_Write_Comments_in_React__The_Good__the_Bad_and_the_Ugly.svg)](https://dmitripavlutin.com/react-comments/)
[![
Introducing React Server: A New Framework for Component-Driven Backend Development
](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/_Introducing_React_Server__A_New_Framework_for_Component-Driven_Backend_Development_.svg)](
https://state-less.cloud
)
[![Building Resilient React Apps - eddywashere.com](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/Building_Resilient_React_Apps_-_eddywashere.com.svg)](https://eddywashere.com/blog/building-resilient-react-apps/)


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
