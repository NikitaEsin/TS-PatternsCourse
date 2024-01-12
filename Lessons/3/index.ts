/* Запрос:
{
   "topicId": 5,
   "status": "published" // "draft", "deleted"
}
Ответ:
[
   {
      "question": "Как осуществляется доставка?",
      "answer": "быстро!",
      "tags": [
         "popular",
         "new"
      ],
      "likes": 3,
      "status": "published"
   }
] */

enum reqest {
  Published = 'published',
  Draft = 'draft',
  Deleted = 'deleted',
}

async function getFaqs(req:{
    topicId: number,
    status: reqest
}): Promise<answer[]> {
  const res = await fetch('/faqs', {
    method: 'POST',
    body: JSON.stringify(req)
  });
  const data = await res.json();
  return data;
} 

type answer = {
    question: string,
    answer: string,
    tags: [
        string,
        string
    ],
    likes: number,
    status: reqest
}
