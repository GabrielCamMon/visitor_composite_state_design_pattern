import { CreateMenu } from "../bll/MenuBll";

exports.get = (req: Request, res: any, next: any) => {
  res.json(CreateMenu());
};

exports.post = async (req: Request, res: any, next: any) => {
  res.send("Requisição recebida com sucesso!");
};
