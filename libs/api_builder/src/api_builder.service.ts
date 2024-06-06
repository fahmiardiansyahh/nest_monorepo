import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';

@Injectable()
export class ApiBuilderService {
    constructor(
        private readonly entityManager: EntityManager
    ) { }

    async getData(table: string, fields?: string, filters?: string, param_filters?: any[], order?: string, group_by?: string, limit?: number, offset?: string) {
        let valueParam = param_filters ?? [];
        let strQuery = `SELECT ${fields || '*'} FROM ${table}`;

        if ((filters && filters.length > 0)) {
            strQuery += ` WHERE ${filters} `;
        }

        strQuery += ` ${(group_by) ? ' GROUP BY ' + group_by : ''} ${(order) ? ' ORDER BY ' + order : ''} ${(limit > 0) ? ' LIMIT ' + limit : ''} ${(limit > 0 && offset) ? ' OFFSET ' + offset : ''}`;

        const result = await this.entityManager.query(strQuery, valueParam);

        return result;
    }

    async callProcedure(sp: string, params?: any[]) {
        let paramsQuery = '';
        let valueParam = [];
        let strQuery = `CALL ${sp}`;

        if (params) {
            paramsQuery = params.map((param, index) => {
                return `?`;
            }).join(', ');

            strQuery += `(${paramsQuery})`;
            valueParam = params;
        } else {
            strQuery += '()';
        }

        const result = await this.entityManager.query(strQuery, valueParam);

        return result[0];
    }

    async updateData(table: string, data: Record<string, any>, filter: string) {
        let setData = '';
        let paramValue = [];

        if (data) {
            const keyData = Object.keys(data);
            paramValue = Object.values(data);

            setData = keyData.map((key) => ` ${key} = ?`).join(', ');
        }

        const strQuery = `UPDATE ${table} SET ${setData} ${(filter) ? 'WHERE ' + filter : ''}`;
        const result = await this.entityManager.query(strQuery, paramValue);

        return result;
    }

    async insertData(table: string, data: Record<string, any>) {
        let setData = '';
        let paramValue = [];
        let paramData = '';

        const keyData = Object.keys(data);
        paramValue = Object.values(data);

        setData = keyData.map((key) => `${key}`).join(', ');
        paramData = keyData.map((key) => '?').join(', ');

        const strQuery = `INSERT INTO ${table}(${setData}) VALUES(${paramData})`;

        const result = await this.entityManager.query(strQuery, paramValue);

        return result;
    }

    async insertBulk(table: string, fields: string, data: any[][]) {
        const insert_data = await this.entityManager.query(`INSERT INTO ${table}(${fields}) VALUES ?`, [data]);

        return insert_data;
    }

    async deleteData(table: string, filter?: string, param_filters?: any[]) {
        return await this.entityManager.query(`DELETE FROM ${table} ${(filter) ? 'WHERE ' + filter : ''}`, param_filters);
    }

    async genEncryptStr(str: string) {
        const result = await this.entityManager.query("SELECT fn_aes_encrypt(?) as enc", [str]);

        return result[0].enc;
    }

    async genDecryptStr(enc_str: string) {
        const result = await this.entityManager.query("SELECT fn_aes_decrypt(?) as decrypt_str", [enc_str]);

        return result[0].decrypt_str;
    }
}
