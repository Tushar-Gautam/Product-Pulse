import { deleteReviewAction, fetchProductReviewsByUser } from "@/utils/actions";
import ReviewCard from "@/components/reviews/ReviewCard";
import SectionTitle from "@/components/global/SectionTitle";
import FormContainer from "@/components/form/FormContainer";
import { IconButton } from "@/components/form/Buttons";

async function ReviewsPage() {
  const reviews = await fetchProductReviewsByUser();
  if (reviews.length === 0) {
    return <SectionTitle text="You have no reviews yet"></SectionTitle>;
  }

  return (
    <>
      <SectionTitle text="Your Reviews" />
      <section className="grid md:grid-cols-2 gap-8 mt-4">
        {reviews.map((review) => {
          const {
            comment,
            rating,
            product: { name, image },
            id,
          } = review;
          return (
            <ReviewCard key={id} reviewInfo={{ comment, rating, name, image }}>
              <DeleteReview reviewId={id} />
            </ReviewCard>
          );
        })}
      </section>
    </>
  );
}

const DeleteReview = ({ reviewId }: { reviewId: string }) => {
  const deleteReview = deleteReviewAction.bind(null, { reviewId });
  return (
    <FormContainer action={deleteReview}>
      <IconButton actionType="delete" />
    </FormContainer>
  );
};

export default ReviewsPage;
