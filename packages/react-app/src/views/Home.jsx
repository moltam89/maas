import React from "react";
import { Balance, Address, TransactionListItem, Owners } from "../components";
import QR from "qrcode.react";
import { List, Row, Col, Button } from "antd";

export default function Home({
  contractAddress,
  localProvider,
  price,
  mainnetProvider,
  blockExplorer,
  executeTransactionEvents,
  contractName,
  readContracts,
  ownerEvents,
  signaturesRequired,
}) {
  return (
    <>
      <div style={{ padding: 32, maxWidth: 750, margin: "auto" }}>
        <div style={{ paddingBottom: 32 }}>
          <div>
            <Balance
              address={contractAddress ? contractAddress : ""}
              provider={localProvider}
              dollarMultiplier={price}
              size={64}
            />
          </div>
          <div>
            <QR
              value={contractAddress ? contractAddress.toString() : ""}
              size="180"
              level="H"
              includeMargin
              renderAs="svg"
              imageSettings={{ excavate: false }}
            />
          </div>
          <div>
            <Address
              address={contractAddress ? contractAddress : ""}
              ensProvider={mainnetProvider}
              blockExplorer={blockExplorer}
              fontSize={32}
            />
          </div>
        </div>
        <div style={{padding:32}}>
        <Owners ownerEvents={ownerEvents} signaturesRequired={signaturesRequired} mainnetProvider={mainnetProvider} blockExplorer={blockExplorer} />
        </div>
        <div style={{padding:64}}>
        <Button type={"primary"} onClick={()=>{
          window.location = "/create"
        }}>Propose Transaction</Button>
        </div>
        <List
          bordered
          dataSource={executeTransactionEvents}
          renderItem={item => {
            return (
              <TransactionListItem
                item={item}
                mainnetProvider={mainnetProvider}
                blockExplorer={blockExplorer}
                price={price}
                readContracts={readContracts}
                contractName={contractName}
              />
            );
          }}
        />
      </div>


    </>
  );
}
