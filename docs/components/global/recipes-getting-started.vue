<template>
  <div>
    <alert type="warning">
      Keep a look out on this space. Constantly adding more recipes over the next few months.
      <a href="https://github.com/fuxingloh/vue-horizontal" target="_blank">Give this repo a star, it will help out greatly!</a>
    </alert>

    <ul>
      <li>Vue Horizontal is required, and you need to
        <n-link to="/installation"> install it</n-link>
        .
      </li>
      <li>Recipes follow the design language defined in the
        <n-link to="/design/principles">design principle</n-link>
        .
      </li>
      <li>You should be able to extract the code snippet and use it as a single file component.</li>
      <li>If you are consistently recycling a design pattern, you should abstract your SFC.</li>
      <li>It might look different on your website due various parent CSS rules. Tailwind is used under the hood with
        normalizing, that might be different from your default settings.
      </li>
    </ul>

    <h4>Recipes are designed:</h4>

    <ul>
      <li>For the responsive web,
        <n-link to="/design/responsive">using default breakpoints</n-link>
        .
      </li>
      <li>For mobile first design,
        <n-link to="/design/principles#peeking">peeking navigation</n-link>
        will be used on the mobile.
        Assumption is made that you have a padding of 24px on the left and right on the mobile viewport.
        The 24px is then removed and added into the <code>&lt;vue-horizontal&gt;</code> as scroll padding.
      </li>
      <li>For broad usage pattern, you should take it and edit it your needs.</li>
    </ul>

    <h4>Why is it so complex? Why is it not shipped together with vue-horizontal?</h4>

    <ul>
      <li>You control how to structure your content with HTML</li>
      <li>You control how it looks with CSS</li>
      <li>
        To give you greater control of your website and thus your code, vue-horizontal is merely a small component to
        horizontally align your content while fixing all the nasty quirks related to horizontal control
        (nav/scroll/touch).
        It also contains a few methods and event emitter that are optimized to make your life easier.
        It doesn't dictate how you structure your HTML or style your CSS.
        This responsive design logic is merely a skeleton of logic that is merely useful in that context.
        And every recipe may requires a different set of logic.
      </li>
    </ul>
  </div>
</template>
