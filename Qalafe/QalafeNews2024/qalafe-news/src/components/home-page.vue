<template>
  <main class="main-container">
    <div class="content-wrapper">
      <div class="columns-container">
        <section class="left-column"></section>
        <section class="right-column">
          <article class="article-container">
            <div class="article-content">
              <div class="article-columns">
                <div class="article-left-column">
                  <p class="article-text">
                    Secretary of State Antony J. Blinken on Friday canceled a
                    weekend trip to Beijing after a
                    <span class="highlighted-text">Chinese spy balloon</span>
                    was sighted above the Rocky Mountain state of Montana,
                    igniting a frenzy of media coverage and political commentary
                    over a machine that the Pentagon said posed no threat to the
                    United States.
                  </p>
                </div>
                <div class="article-right-column"></div>
              </div>
            </div>
            <div class="media-container">
              <div class="media-content">
                <h2 class="media-title">
                  More Airports to Use Greener 'Glide' Approach to Landing
                </h2>
                <div class="media-meta"></div>
                <p class="media-description">
                  The Stopping Home Office Work's Unproductive Problems (SHOW
                  UP, get it?) Act of 2023 passed the Republican-majority US
                  House of Representatives on a close-to-party-line vote l...
                </p>
              </div>
            </div>
          </article>
        </section>
      </div>
    </div>
  </main>
</template>

<style scoped>
.main-container {
  background-color: #fdfdfd;
  z-index: 10;
  padding-left: 25px;
  width: 1000px;
  margin: auto;
}

@media (max-width: 991px) {
  .main-container {
    padding-left: 20px;
  }
}

.content-wrapper {
  display: flex;
  gap: 20px;
}

@media (max-width: 991px) {
  .content-wrapper {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }
}

.columns-container {
  display: flex;
  gap: 20px;
}

@media (max-width: 991px) {
  .columns-container {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }
}

.left-column,
.right-column {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
}

@media (max-width: 991px) {
  .left-column,
  .right-column {
    width: 100%;
  }
}

.right-column {
  margin-left: 20px;
}

.article-container {
  display: flex;
  flex-direction: column;
}

@media (max-width: 991px) {
  .article-container {
    margin-top: 25px;
  }
}

.article-content {
  background-color: #1a1a1a;
  padding: 0 25px 25px;
}

@media (max-width: 991px) {
  .article-content {
    padding: 0 20px;
  }
}

.article-columns {
  display: flex;
  gap: 20px;
}

@media (max-width: 991px) {
  .article-columns {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }
}

.article-left-column {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 37%;
}

@media (max-width: 991px) {
  .article-left-column {
    width: 100%;
  }
}

.article-text {
  color: #d5d5d5;
  margin-top: 12px;
  font: 400 16px Georgia, sans-serif;
}

@media (max-width: 991px) {
  .article-text {
    margin-top: 35px;
  }
}

.highlighted-text {
  color: rgba(213, 213, 213, 1);
}

.article-right-column {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 63%;
  margin-left: 20px;
}

@media (max-width: 991px) {
  .article-right-column {
    width: 100%;
  }
}

.media-container {
  display: flex;
  margin-top: 15px;
  gap: 20px;
  justify-content: space-between;
}

@media (max-width: 991px) {
  .media-container {
    flex-wrap: wrap;
    padding-right: 20px;
  }
}

.media-image {
  aspect-ratio: 0.93;
  object-fit: cover;
  object-position: center;
  width: 194px;
  overflow: hidden;
  align-self: start;
  margin-top: 10px;
  font-size: 22px;
  color: #fff;
  font-weight: 700;
  padding: 19px 15px 80px;
}

@media (max-width: 991px) {
  .media-image {
    padding-right: 20px;
  }
}

.media-separator {
  aspect-ratio: 0.01;
  object-fit: auto;
  object-position: center;
  width: 2px;
  stroke-width: 2px;
  stroke: #f1f0f0;
  border: 2px solid rgba(241, 240, 240, 1);
  margin: auto 0;
}

.media-content {
  background-color: #fdfdfd;
  display: flex;
  flex-direction: column;
  font-weight: 400;
  padding: 14px 0;
}

.media-title {
  color: #000;
  font: 700 20px Georgia, sans-serif;
}

.media-meta {
  display: flex;
  margin-top: 15px;
  gap: 15px;
  font-size: 10px;
  color: #676767;
  line-height: 100%;
}

.media-description {
  color: #04594d;
  margin-top: 25px;
  font: 16px Georgia, sans-serif;
}
</style>
