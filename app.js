const app = document.getElementById("app");

data.forEach(tweet => {
  let template = `
    <div class="container">
      <div class="tweet">
        <div class="tweet_header">
          <div class="tweet_acc">
            <div class="tweet_acc-image">
              <img src="${tweet.user.profile_image_url}" alt="${tweet.user.name} - Profile picture">
            </div>

            <div class="tweet_acc-info">
              <h4 class="tweet_acc-info--name">${tweet.user.name}</h4>
              <p class="tweet_acc-info--handle">@${tweet.user.screen_name}</p>
            </div>
          </div>

          <div class="tweet_logo">

          </div>

        </div>

        <div class="tweet_text">
          <p>${tweet.full_text}</p>
        </div>

        <div class="tweet_image">
          <img src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80" alt="Put your image description here">
        </div>
      </div>
    </div>
  `;

  app.innerHTML += template;
});
