# Github Readme Blog Post Action

A (somewhat) simple github action that generates a set of cards for recent blog posts.

Here's an example of how it looks given the URLs for DEV Community, JavaScript Weekly, and Echo JS:

<!-- post-list:start -->
## DEV Community

The most recent home feed on DEV Community.

[Read more](https://dev.to)
> Last updated: Monday, June 6, 2022 at 6:42:48 PM

> Showing 5 of 12 posts.

[![Ultrasonic payments](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community/Ultrasonic_payments.svg)](https://dev.to/stripe/ultrasonic-payments-2958)
[![How to create additional SSH Keys](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community/How_to_create_additional_SSH_Keys.svg)](https://dev.to/ibrarturi/how-to-create-additional-ssh-keys-ob6)
[![How to store information in the Solana Blockchain](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community/How_to_store_information_in_the_Solana_Blockchain.svg)](https://dev.to/mateolafalce/how-to-store-information-in-the-solana-blockchain-1f36)
[![Some must know python modules for competitive programming](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community/Some_must_know_python_modules_for_competitive_programming.svg)](https://dev.to/kaushik94/some-must-know-python-modules-for-competitive-programming-43c3)
[![Hero Images and Stylizing Your Portfolio Website](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/DEV_Community/Hero_Images_and_Stylizing_Your_Portfolio_Website.svg)](https://dev.to/jennamoffitt/hero-images-and-stylizing-your-portfolio-website-1g50)


## JavaScript Weekly

A newsletter of JavaScript articles, news and cool projects

[Read more](https://javascriptweekly.com/)
> Last updated: Monday, June 6, 2022 at 6:42:51 PM

> Showing 4 of 4 posts.

[![Sure, you can make games in Word with JavaScript now.](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/JavaScript_Weekly/Sure__you_can_make_games_in_Word_with_JavaScript_now..svg)](https://javascriptweekly.com/issues/592)
[![Airbnb's uncommon route to faster JS builds](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/JavaScript_Weekly/Airbnb's_uncommon_route_to_faster_JS_builds.svg)](https://javascriptweekly.com/issues/591)
[![Getting animated](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/JavaScript_Weekly/Getting_animated.svg)](https://javascriptweekly.com/issues/590)
[![19 hours of D3.js??](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/JavaScript_Weekly/19_hours_of_D3.js__.svg)](https://javascriptweekly.com/issues/589)


## Echo JS

Description pending

[Read more](
http://www.echojs.com
)
> Last updated: Monday, June 6, 2022 at 6:42:56 PM

> Showing 5 of 30 posts.

[![API with NestJS #64. Transactions with PostgreSQL and MikroORM](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/API_with_NestJS__64._Transactions_with_PostgreSQL_and_MikroORM.svg)](http://wanago.io/2022/06/06/api-nestjs-transactions-postgresql-mikroorm/)
[![React Portal: All You Need to Know](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/React_Portal__All_You_Need_to_Know.svg)](https://lyty.dev/blog/react-portal-react-portal-examples/)
[![GitHub - kaarambaa/Classification_automatization: An Open-Source application, providing an ability to create and fit classification ensemble models in no-code paradigm](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/GitHub_-_kaarambaa_Classification_automatization__An_Open-Source_application__providing_an_ability_to_create_and_fit_classification_ensemble_models_in_no-code_paradigm.svg)](https://github.com/kaarambaa/Classification_automatization)
[![How to use Chrome as a Code Editor and Debugger](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/How_to_use_Chrome_as_a_Code_Editor_and_Debugger.svg)](https://blog.openreplay.com/how-to-use-chrome-as-a-code-editor-and-debugger)
[![GitHub - moneywithbots/bnb-eth-wallet-drainer: Hack to drain balance on anyones crypto wallet](https://raw.githubusercontent.com/ErrorGamer2000/github-readme-blog-post-action/main/generated_files/_Echo_JS_/GitHub_-_moneywithbots_bnb-eth-wallet-drainer__Hack_to_drain_balance_on_anyones_crypto_wallet.svg)](https://github.com/moneywithbots/bnb-eth-wallet-drainer)


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
