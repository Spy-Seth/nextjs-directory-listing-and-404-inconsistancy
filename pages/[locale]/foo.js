export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: { locale: "fr" }
      },
      {
        params: { locale: "en" }
      }
    ]
  };
}

export async function getStaticProps(context) {
  const {
    params: { locale }
  } = context;

  return { props: { locale } };
}
export default function DayPage({ locale }) {
  return <div>Hello in {locale}</div>;
}
