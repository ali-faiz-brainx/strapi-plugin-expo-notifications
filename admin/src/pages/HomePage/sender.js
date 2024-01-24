import React from "react";

import {
  Box,
  Typography,
  Button,
  Stack,
  Field,
  FieldLabel,
  FieldInput,
} from "@strapi/design-system";

import { useIntl } from "react-intl";
import getTrad from "../../utils/getTrad";

export default function Sender({ formik, sendTest, sendForReal, testToken, sendToAll }) {
  const { formatMessage } = useIntl();
  return (
    <div style={{ height: 315 }}>
      <Box padding={4}>
        <Box paddingTop={2} paddingBottom={4}>
          <Typography variant="beta">
            {formatMessage({
              id: getTrad("title.new"),
              defaultMessage: "New notification",
            })}
          </Typography>
        </Box>
        <form>
          <Stack spacing={4}>
            <Field name="title">
              <FieldLabel>
                {formatMessage({
                  id: getTrad("title"),
                  defaultMessage: "Title",
                })}
              </FieldLabel>
              <FieldInput
                type="text"
                placeholder={formatMessage({
                  id: getTrad("title.placeholder"),
                  defaultMessage: "Chose a title",
                })}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.title}
              />
            </Field>
            <Field name="subtitle">
              <FieldLabel>
                {formatMessage({
                  id: getTrad("subtitle"),
                  defaultMessage: "Subtitle",
                })}
              </FieldLabel>
              <FieldInput
                type="text"
                placeholder={formatMessage({
                  id: getTrad("subtitle.placeholder"),
                  defaultMessage: "Chose a subtitle",
                })}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.subtitle}
              />
            </Field>
            <Field name="data.imageUrl">
              <FieldLabel>
                {formatMessage({
                  id: getTrad("data.imageUrl"),
                  defaultMessage: "Image URL",
                })}
              </FieldLabel>
              <FieldInput
                type="text"
                placeholder={formatMessage({
                  id: getTrad("data.imageUrl.placeholder"),
                  defaultMessage: "Chose an Image URL",
                })}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.data.imageUrl}
              />
            </Field>
          </Stack>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: 6,
              marginBottom: 14,
            }}
          >
            {testToken && (
              <Button variant="secondary" type="submit" onClick={sendTest}>
                {formatMessage({
                  id: getTrad("send.test"),
                  defaultMessage: "Send a test",
                })}
              </Button>
            )}
            <div style={{ marginLeft: 8 }}>
              <Button type="submit" onClick={sendToAll}>
                {formatMessage({
                  id: getTrad("send.to.all"),
                  defaultMessage: "Send to all",
                })}
              </Button>
            </div>
          </div>
        </form>
      </Box>
    </div>
  );
}
