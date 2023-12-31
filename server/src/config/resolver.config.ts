import { Resolver } from "did-resolver";
import * as WebResolver from "web-did-resolver";
import * as KeyResolver from "key-did-resolver";

const webDIDResolver = WebResolver.getResolver();
const keyDIDResolver = KeyResolver.getResolver();
export const resolver = new Resolver({ ...keyDIDResolver, ...webDIDResolver });
