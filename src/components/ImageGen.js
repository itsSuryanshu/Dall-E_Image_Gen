import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  dangerouslyAllowBrowser: true,
});

const ImageGen = async (prompt, filter) => {
  const sent = `Sent prompt to API: ${prompt} (${filter} image)`;
  console.log(sent);
  let response = await openai.images.generate({
    model: "dall-e-3",
    prompt: `${prompt} (${filter} image)`,
    n: 1,
    size: "1024x1024",
  });
  //response url
  let imageLink = response.data[0].url;
  //console.log(`Received image: ${imageLink}`);
  return imageLink;
};

export default ImageGen;
