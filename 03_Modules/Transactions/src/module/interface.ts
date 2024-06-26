// Copyright (c) 2023 S44, LLC
// Copyright Contributors to the CitrineOS Project
//
// SPDX-License-Identifier: Apache 2.0

import {
  GetTransactionStatusRequest,
  IMessageConfirmation,
} from '@citrineos/base';

/**
 * Interface for the transaction module.
 */
export interface ITransactionsModuleApi {
  getTransactionStatus(
    identifier: string,
    tenantId: string,
    request: GetTransactionStatusRequest,
    callbackUrl?: string,
  ): Promise<IMessageConfirmation>;
}
