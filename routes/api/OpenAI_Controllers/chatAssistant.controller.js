const { Configuration, OpenAIApi } = require('openai');

exports.chatgpt =  async (req, res, next) => {
    const supportedData = req?.body?.supportedData;
    const request = req?.body?.request;

    const configuration = new Configuration({
      apiKey: "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",
    });

    const openai = new OpenAIApi(configuration);

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{role: "user", content: `${supportedData} ${request}`}],
    });

    try { 
      res.status(200).send({
        status: 200,
        data: response.data,
      })
    } catch (err) {
      console.log(err)
      res.status(500).send('Server Error');
    }
    next()
  }