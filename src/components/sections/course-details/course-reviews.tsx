import { CourseReviewList } from "@/components/courses/course-review-list";
import { StarRating } from "@/components/courses/star-rating";
import { formatTimeAgo } from "@/lib/format";
import type { CourseDetail, RatingCounts } from "@/types/course";

function RatingSummary({ counts }: { counts: RatingCounts }) {
  const total = counts.reduce((sum, count) => sum + count, 0);
  const average = total > 0 ? counts.reduce((sum, count, index) => sum + count * (5 - index), 0) / total : 0;

  return (
    <div className="@container mt-6 rounded-xl border border-neutral-200 p-5 md:px-9.75 md:py-10.5">
      <div className="flex flex-col gap-6 @xl:flex-row @xl:items-center">
        <div className="flex h-28 shrink-0 flex-col items-center justify-center rounded-lg bg-secondary-400 text-neutral-950 @xl:h-35 @xl:w-32">
          <p className="text-sm font-medium">Ratings</p>
          <p className="mt-0.5 text-4xl leading-none font-bold">
            {average.toFixed(1)}
            <span className="sr-only"> out of 5</span>
          </p>
        </div>

        <ul aria-label="Rating breakdown" className="flex min-w-0 flex-1 flex-col gap-2.5">
          {counts.map((count, index) => {
            const stars = 5 - index;
            const share = total > 0 ? (count / total) * 100 : 0;
            return (
              <li key={stars} className="flex h-5 items-center gap-3 @sm:gap-5">
                <span className="sr-only">{`${stars} ${stars === 1 ? "star" : "stars"}: ${count} reviews`}</span>
                <span aria-hidden="true" className="h-2 min-w-0 flex-1 overflow-hidden rounded-full bg-neutral-100">
                  <span className="block h-full rounded-full bg-secondary-400" style={{ width: `${share}%` }} />
                </span>
                <StarRating rating={stars} className="gap-1 @sm:gap-2" starClassName="size-4 @sm:size-5" />
                <span aria-hidden="true" className="w-10 shrink-0 text-right body-m text-neutral-500">
                  {count}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export function CourseReviews({ course }: { course: CourseDetail }) {
  const now = new Date();
  const reviews = course.learnerReviews.map((review) => ({ ...review, timeAgo: formatTimeAgo(review.date, now) }));

  return (
    <div>
      <section aria-labelledby="course-learner-reviews">
        <h2 id="course-learner-reviews" className="heading-xs text-neutral-950">
          What Learners Are Saying
        </h2>
        <p className="mt-6.5 body-m text-neutral-700">{course.reviewsIntro}</p>
        <RatingSummary counts={course.ratingCounts} />
      </section>

      <CourseReviewList reviews={reviews} />
    </div>
  );
}
