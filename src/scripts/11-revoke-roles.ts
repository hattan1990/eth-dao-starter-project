import sdk from "./1-initialize-sdk.js";

const token = sdk.getContract("0x334d10AA01307220eB158F22BF8229F0B931e3ac", "token");

(async () => {
  try {
    // 現在のロールを記録します
    const allRoles = await (await token).roles.getAll();

    console.log("👀 Roles that exist right now:", allRoles);

    // ERC-20 のコントラクトに関して、あなたのウォレットが持っている権限をすべて取り消します
    await (await token).roles.setAll({ admin: [], minter: [] });
    console.log(
      "🎉 Roles after revoking ourselves",
      await (await token).roles.getAll()
    );
    console.log("✅ Successfully revoked our superpowers from the ERC-20 contract");

  } catch (error) {
    console.error("Failed to revoke ourselves from the DAO treasury", error);
  }
})();